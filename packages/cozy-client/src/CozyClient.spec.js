import MockDate from 'mockdate'

import {
  SCHEMA,
  TODO_1,
  TODO_2,
  TODO_3,
  TODO_WITH_AUTHOR,
  AUTHORS,
  DOCTYPE_VERSION,
  APP_NAME,
  APP_VERSION,
  SOURCE_ACCOUNT_ID
} from './__tests__/fixtures'

import CozyClient from './CozyClient'
import CozyStackClient, { OAuthClient } from 'cozy-stack-client'
import CozyLink from './CozyLink'
import { Mutations, QueryDefinition } from './queries/dsl'
import {
  initQuery,
  receiveQueryResult,
  receiveQueryError,
  initMutation,
  receiveMutationResult,
  receiveMutationError
} from './store'
import { HasManyFiles, Association, HasMany } from './associations'
import mapValues from 'lodash/mapValues'

import { Q } from 'cozy-client'

const normalizeData = data =>
  mapValues(data, (docs, doctype) => {
    return docs.map(doc => ({
      ...doc,
      _id: doc.id || doc._id,
      id: doc.id || doc._id,
      _type: doctype
    }))
  })

const METADATA_VERSION = 1

describe('CozyClient initialization', () => {
  let client, links

  beforeEach(() => {
    links = [
      new CozyLink((operation, result = '', forward) => {
        return forward(operation, result + 'foo')
      }),
      new CozyLink((operation, result, forward) => {
        return forward(operation, result + 'bar')
      }),
      (operation, result) => {
        return result + 'baz'
      }
    ]
    links.forEach(link => {
      link.registerClient = jest.fn()
    })

    client = new CozyClient({ links, schema: SCHEMA })
  })

  it('should autologin when provided token and uri', () => {
    const token = 'fake_token'
    const uri = 'https://example.mycozy.cloud'
    client = new CozyClient({ token, uri })
    expect(client.isLogged).toBeTruthy()
  })

  describe('explicit login', () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn').mockImplementation(() => {})
    })
    afterEach(() => {
      console.warn.mockRestore()
    })

    it('should not break explicit login when provided token and uri', () => {
      const token = 'fake_token'
      const uri = 'https://example.mycozy.cloud'
      client = new CozyClient({ token, uri })
      expect(client.login()).toBeInstanceOf(Promise)
    })
  })

  it('can be instantiated from environment with string token', () => {
    const url = 'https://testcozy.mycozy.cloud'
    const token = 'test-token'
    client = CozyClient.fromEnv({
      COZY_URL: url,
      COZY_CREDENTIALS: token
    })
    expect(client.stackClient.uri).toBe(url)
    expect(client.stackClient.token.token).toBe(token)
  })

  it('can be instantiated from environment with OAuth token', () => {
    const url = 'https://testcozy.mycozy.cloud'
    const token = 'test-token'
    const creds = {
      token: {
        accessToken: token
      }
    }
    client = CozyClient.fromEnv({
      COZY_URL: url,
      COZY_CREDENTIALS: JSON.stringify(creds),
      NODE_ENV: 'development'
    })
    expect(client.stackClient.uri).toBe(url)
    expect(client.stackClient.token.accessToken).toBe(token)
  })

  it('can be instantiated from an old client', () => {
    // Not using a real cozy-client-js here not to have to add it as a dep
    const url = 'https://testcozy.mycozy.cloud'
    const token = 'Registration-token'
    const oldClient = {
      _url: url,
      _token: {
        token
      }
    }
    const client = CozyClient.fromOldClient(oldClient)
    expect(client.stackClient.uri).toBe(url)
    expect(client.stackClient.token.token).toBe(token)
  })

  describe('plugins', () => {
    it('can register a plugin', () => {
      expect.assertions(2)
      class TestPlugin {
        constructor(testClient) {
          expect(testClient).toBe(client)
        }
      }
      TestPlugin.pluginName = 'test'
      const client = new CozyClient({})
      client.registerPlugin(TestPlugin)
      expect(client.plugins.test).toBeInstanceOf(TestPlugin)
    })

    it('cannot register a plugin with the same name as another plugin', () => {
      class TestPlugin {}
      class TestPlugin2 {}
      TestPlugin.pluginName = TestPlugin2.pluginName = 'test'
      client.registerPlugin(TestPlugin)
      expect(() => client.registerPlugin(TestPlugin2)).toThrow(
        new Error(
          'Cannot register plugin test. A plugin with the same name has already been registered.'
        )
      )
    })

    it('cannot register a plugin with no `pluginName`', () => {
      class TestPlugin {}
      expect(() => client.registerPlugin(TestPlugin)).toThrow(
        new Error(
          'Cannot register a plugin whose class does not have `pluginName` attribute.'
        )
      )
    })
  })

  it('should have chained links', async () => {
    const res = await client.requestQuery({})
    expect(res).toBe('foobarbaz')
  })

  it('should have registered the client on all links ', () => {
    for (const link of links) {
      expect(link.registerClient).toHaveBeenCalledWith(client)
    }
  })

  it('should create a store when calling makeObservableQuery', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    client.makeObservableQuery(
      new QueryDefinition({ doctype: 'io.cozy.todos' })
    )
    console.warn.mockRestore()
    expect(client.store).not.toBe(undefined)
  })
})

describe('Stack client initialization', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })
  afterEach(() => {
    console.warn.mockRestore()
  })
  it('should add default callbacks', async () => {
    const client = new CozyClient({})
    await client.login()
    expect(client.stackClient.options.onRevocationChange).toBe(
      client.handleRevocationChange
    )
    expect(client.stackClient.options.onTokenRefresh).toBe(
      client.handleTokenRefresh
    )
  })
})

describe('CozyClient handlers', () => {
  let client

  beforeEach(() => {
    client = new CozyClient({})
    client.emit = jest.fn()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should handle revocation change to true', () => {
    client.handleRevocationChange(true)
    expect(client.emit).toHaveBeenCalledWith('revoked')
    expect(client.isRevoked).toBe(true)
  })

  it('should handle revocation change to false', () => {
    client.handleRevocationChange(false)
    expect(client.emit).toHaveBeenCalledWith('unrevoked')
    expect(client.isRevoked).toBe(false)
  })

  it('should warn when overriding default handlers', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    new CozyClient({
      stackClient: new CozyStackClient({
        onRevocationChange: () => {}
      })
    })
    expect(console.warn).toHaveBeenCalledWith(
      'You passed a stackClient with its own onRevocationChange. It is not supported, unexpected things might happen.'
    )
  })
})

describe('CozyClient logout', () => {
  let client, links, stackClient

  class MockOAuthClient extends OAuthClient {
    constructor() {
      super({ oauth: {} })
      this.unregister = jest.fn()
      this.isRegistered = jest.fn()
      this.fetch = jest.fn()
    }
  }

  beforeEach(() => {
    links = [
      new CozyLink((operation, result = '', forward) => {
        return forward(operation, result + 'foo')
      }),
      new CozyLink((operation, result, forward) => {
        return forward(operation, result + 'bar')
      }),
      (operation, result) => {
        return result + 'baz'
      }
    ]
    links.forEach(link => {
      link.registerClient = jest.fn()
    })
    stackClient = new MockOAuthClient()
    client = new CozyClient({
      links,
      stackClient,
      schema: SCHEMA,
      warningForCustomHandlers: false
    })
  })

  it('should call reset on each link that can be reset', async () => {
    links[0].reset = jest.fn()
    links[2].reset = jest.fn()
    await client.login()
    await client.logout()
    expect(links[0].reset).toHaveBeenCalledTimes(1)
    expect(links[2].reset).toHaveBeenCalledTimes(1)

    // test if we launch twice logout, it doesn't launch twice reset.
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    await client.logout()
    console.warn.mockRestore()

    expect(links[0].reset).toHaveBeenCalledTimes(1)
    expect(links[2].reset).toHaveBeenCalledTimes(1)
  })

  it('should call all reset even if a reset throws an error', async () => {
    const spy = jest.spyOn(global.console, 'warn').mockReturnValue(jest.fn())
    links[0].reset = jest.fn().mockRejectedValue(new Error('Async error'))
    links[2].reset = jest.fn()
    await client.login()
    await client.logout()
    expect(links[0].reset).toHaveBeenCalledTimes(1)
    expect(links[2].reset).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  it('should emit events', async () => {
    const originalLogout = client.logout
    links[0].reset = jest.fn()
    links[2].reset = jest.fn()
    jest.spyOn(client, 'logout').mockImplementation(async function() {
      await originalLogout.apply(this, arguments)
      expect(client.emit.mock.calls.map(x => x[0])).toEqual([
        'beforeLogin',
        'login',
        'beforeLogout',
        'logout'
      ])
    })
    jest.spyOn(client, 'emit')
    await client.login()
    await client.logout()
  })

  it('should unregister an oauth client', async () => {
    await client.login()
    stackClient.isRegistered.mockReturnValue(true)

    await client.logout()
    expect(stackClient.unregister).toHaveBeenCalled()
    expect(stackClient.fetch).not.toHaveBeenCalledWith('DELETE', '/auth/login')
  })

  it('should log out a web client', async () => {
    stackClient = {
      fetch: jest.fn(),
      unregister: jest.fn()
    }
    client = new CozyClient({
      links,
      stackClient,
      schema: SCHEMA,
      uri: 'http://cozy.io',
      token: '123abc',
      warningForCustomHandlers: false
    })
    await client.logout()
    expect(stackClient.fetch).toHaveBeenCalledWith('DELETE', '/auth/login')
    expect(stackClient.unregister).not.toHaveBeenCalled()
  })
})

describe('CozyClient login', () => {
  let client, links

  beforeEach(() => {
    links = [
      new CozyLink((operation, result = '', forward) => {
        return forward(operation, result + 'foo')
      }),
      new CozyLink((operation, result, forward) => {
        return forward(operation, result + 'bar')
      }),
      (operation, result) => {
        return result + 'baz'
      }
    ]
    links.forEach(link => {
      link.registerClient = jest.fn(client => (link.client = client))
    })
    client = new CozyClient({ links, schema: SCHEMA })
  })

  it('Should call `registerClientOnLinks`', async () => {
    client.registerClientOnLinks = jest.fn()
    await client.login()

    expect(client.registerClientOnLinks).toHaveBeenCalled()
  })

  it('Should call `onLogin` on every link that implements it', async () => {
    links[0].onLogin = jest.fn(() =>
      expect(links[0].client.stackClient.uri).toBe('http://cozy.tools')
    )
    links[2].onLogin = jest.fn()

    await client.login({ uri: 'http://cozy.tools' })

    expect(links[0].onLogin).toHaveBeenCalledTimes(1)
    expect(links[2].onLogin).toHaveBeenCalledTimes(1)

    // test if we launch twice login, it doesn't launch twice onLogin.
    await client.login()

    expect(links[0].onLogin).toHaveBeenCalledTimes(1)
    expect(links[2].onLogin).toHaveBeenCalledTimes(1)
  })

  it('should emit login', async () => {
    client.emit = jest.fn()
    client.registerClientOnLinks = jest.fn()
    await client.login()
    expect(client.emit).toHaveBeenCalledWith('login')
  })

  it('should set isRevoked to false', async () => {
    client.emit = jest.fn()
    client.registerClientOnLinks = jest.fn()
    client.isRevoked = true
    await client.login()
    expect(client.isRevoked).toBe(false)
  })
})

describe('CozyClient', () => {
  const requestHandler = jest.fn()
  const link = new CozyLink(requestHandler)

  const MOCKED_DATE = '2018-05-05T09:09:00.115Z'

  beforeAll(() => {
    MockDate.set(MOCKED_DATE)
  })

  afterAll(() => {
    jest.restoreAllMocks()
    MockDate.reset()
  })

  let client
  beforeEach(() => {
    client = new CozyClient({
      links: [link],
      schema: SCHEMA,
      appMetadata: {
        slug: APP_NAME,
        sourceAccount: SOURCE_ACCOUNT_ID,
        version: APP_VERSION
      }
    })
    client.ensureStore()
    jest.spyOn(client.store, 'dispatch').mockImplementation(() => {})
  })

  afterEach(() => {
    requestHandler.mockReset()
  })

  describe('all', () => {
    it('should return a QueryDefinition', () => {
      expect(Q('io.cozy.todos')).toEqual({ doctype: 'io.cozy.todos' })
    })
  })

  describe('setData', () => {
    it('should fill the store with data', () => {
      client.store.dispatch.mockRestore()
      jest.spyOn(client.store, 'dispatch')
      client.setData(
        normalizeData({
          'io.cozy.todos': [{ id: 1, done: true }, { id: 2, done: false }],
          'io.cozy.people': [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
        })
      )
      expect(client.getDocumentFromState('io.cozy.todos', 1)).toMatchObject({
        id: 1,
        done: true
      })
      expect(client.getDocumentFromState('io.cozy.people', 1)).toMatchObject({
        id: 1,
        name: 'Alice'
      })
    })
  })

  describe('getDocumentFromState', () => {
    it('should return null in case of error', () => {
      jest.spyOn(client.store, 'getState').mockImplementation(() => {
        throw new Error('Problem with store')
      })
      expect(client.getDocumentFromState('io.cozy.people', 1)).toBe(null)
    })
  })

  describe('find', () => {
    it('should return a QueryDefinition', () => {
      expect(
        client.find('io.cozy.todos').where({ done: { $eq: true } })
      ).toEqual({
        doctype: 'io.cozy.todos',
        selector: { done: { $eq: true } }
      })
    })
  })

  describe('save', () => {
    it('should mutate the document', async () => {
      client.setData(
        normalizeData({
          'io.cozy.todos': [TODO_1]
        })
      )
      const doc = { ...TODO_1, label: 'Buy croissants' }
      client.store.dispatch.mockReset()
      await client.save(doc)
      const dispatchCalls = client.store.dispatch.mock.calls
      expect(dispatchCalls.slice(-2)[0][0].definition.document).toMatchObject({
        label: 'Buy croissants'
      })
    })

    it('should dehydrate relationships', async () => {
      class FakeHasMany extends Association {
        dehydrate(doc) {
          return {
            ...doc,
            [this.name]: this.target[this.name]
          }
        }
      }
      const rawDoc = {
        ...TODO_1,
        authors: ['author1', 'author2']
      }
      const hydratedDoc = {
        ...TODO_1,
        authors: new FakeHasMany(rawDoc, 'authors', 'io.cozy.authors', {})
      }
      await client.save(hydratedDoc, { as: 'updateTodo' })
      expect(client.store.dispatch.mock.calls[0][0]).toEqual(
        initMutation('updateTodo', {
          mutationType: 'UPDATE_DOCUMENT',
          document: {
            ...rawDoc,
            cozyMetadata: {
              updatedAt: MOCKED_DATE,
              updatedByApps: [
                {
                  date: MOCKED_DATE,
                  slug: APP_NAME,
                  version: APP_VERSION
                }
              ]
            }
          }
        })
      )
    })
  })

  describe('getDocumentSavePlan', () => {
    it('should handle missing _rev and _id', () => {
      const NEW_FOO = {
        attributes: {
          bar: 'Zap'
        }
      }
      const mutation = client.getDocumentSavePlan(NEW_FOO)
      expect(mutation.mutationType).toBe('CREATE_DOCUMENT')
    })

    it('should handle fixed _id', () => {
      const NEW_FOO = {
        _id: '29328139a6ed4320bdd75d28141e8fb2',
        attributes: {
          bar: 'Zap'
        }
      }
      const mutation = client.getDocumentSavePlan(NEW_FOO)
      expect(mutation.mutationType).toBe('CREATE_DOCUMENT')
    })

    it('should handle _rev for update', () => {
      const OLD_FOO = {
        _id: '29328139a6ed4320bdd75d28141e8fb2',
        _rev: '1-5e3e3c68250747589266c23ce507b1a4'
      }
      const mutation = client.getDocumentSavePlan(OLD_FOO)
      expect(mutation.mutationType).toBe('UPDATE_DOCUMENT')
    })

    it('should add cozy metadata when creating a document', () => {
      const doc = {
        _type: 'io.cozy.todos',
        cozyMetadata: {
          customField: 'foo'
        }
      }
      const {
        document: { cozyMetadata }
      } = client.getDocumentSavePlan(doc)
      expect(cozyMetadata.createdByApp).toEqual(APP_NAME)
      expect(cozyMetadata.customField).toEqual('foo')
    })

    it('should add cozy metadata when updating a document', () => {
      const doc = {
        _id: '29328139a6ed4320bdd75d28141e8fb2',
        _rev: '1-5e3e3c68250747589266c23ce507b1a4',
        _type: 'io.cozy.todos',
        cozyMetadata: {
          createdByApp: 'other-app',
          updatedByApps: [
            {
              date: '2016-01-15T12:33:00.225Z',
              slug: 'other-app',
              version: 27
            }
          ]
        }
      }
      const {
        document: { cozyMetadata }
      } = client.getDocumentSavePlan(doc)
      expect(cozyMetadata.createdByApp).toEqual('other-app')
      expect(cozyMetadata.updatedByApps).toEqual([
        {
          date: MOCKED_DATE,
          slug: APP_NAME,
          version: APP_VERSION
        },
        {
          date: '2016-01-15T12:33:00.225Z',
          slug: 'other-app',
          version: 27
        }
      ])
    })

    it('should handle associations for a new document with mutation creators', () => {
      const NEW_TODO = {
        _type: 'io.cozy.todos',
        label: 'Buy RAM',
        attachments: [{ _id: 12345, _type: 'io.cozy.files' }]
      }
      const EXPECTED_CREATED_TODO = { _id: 67890, ...NEW_TODO }
      const mutation = client.getDocumentSavePlan(NEW_TODO, {
        attachments: [{ _id: 12345, _type: 'io.cozy.files' }]
      })
      expect(Array.isArray(mutation)).toBe(true)
      expect(typeof mutation[1] === 'function').toBe(true)
      expect(mutation[1]({ data: EXPECTED_CREATED_TODO })).toEqual([
        Mutations.addReferencesTo(EXPECTED_CREATED_TODO, [
          { _id: 12345, _type: 'io.cozy.files' }
        ])
      ])
    })

    it('should handle associations for a new file with relationship', () => {
      // icons is a has-many relationship defined in __tests__/fixtures for files
      const NEW_FILE = {
        _type: 'io.cozy.files',
        icons: [
          {
            id: 67890,
            type: 'io.cozy.files'
          }
        ]
      }
      const EXPECTED_CREATED_FILE = { _id: 12345, _type: 'io.cozy.files' }
      const mutation = client.getDocumentSavePlan(NEW_FILE, {
        icons: [
          {
            id: 67890,
            type: 'io.cozy.files'
          }
        ]
      })
      expect(Array.isArray(mutation)).toBe(true)
      expect(typeof mutation[1] === 'function').toBe(true)
      expect(mutation[1]({ data: EXPECTED_CREATED_FILE })).toEqual([
        Mutations.addReferencedBy(EXPECTED_CREATED_FILE, [
          { id: 67890, type: 'io.cozy.files' }
        ])
      ])
    })

    it('should handle empty associations', () => {
      const NEW_TODO = {
        _type: 'io.cozy.todos',
        label: 'Buy RAM',
        attachments: [{ _id: 12345, _type: 'io.cozy.files' }]
      }
      const mutation = client.getDocumentSavePlan(NEW_TODO, {
        attachments: []
      })
      expect(Array.isArray(mutation)).toBe(false)
      expect(mutation).toEqual({
        mutationType: 'CREATE_DOCUMENT',
        document: {
          ...NEW_TODO,
          cozyMetadata: {
            metadataVersion: METADATA_VERSION,
            createdAt: MOCKED_DATE,
            createdByApp: APP_NAME,
            createdByAppVersion: APP_VERSION,
            doctypeVersion: DOCTYPE_VERSION,
            updatedAt: MOCKED_DATE,
            updatedByApps: [
              {
                date: MOCKED_DATE,
                slug: APP_NAME,
                version: APP_VERSION
              }
            ],
            sourceAccount: SOURCE_ACCOUNT_ID
          }
        }
      })
    })
  })

  describe('cozy metadata', () => {
    it('should create cozy metadata (creation trigger)', () => {
      const doc = {
        _type: 'io.cozy.todos'
      }
      const { cozyMetadata } = client.ensureCozyMetadata(doc, {
        event: 'creation'
      })
      expect(cozyMetadata).toEqual({
        metadataVersion: METADATA_VERSION,
        doctypeVersion: DOCTYPE_VERSION,
        createdByApp: APP_NAME,
        sourceAccount: SOURCE_ACCOUNT_ID,
        createdByAppVersion: APP_VERSION,
        updatedByApps: [
          {
            date: MOCKED_DATE,
            slug: APP_NAME,
            version: APP_VERSION
          }
        ],
        createdAt: MOCKED_DATE,
        updatedAt: MOCKED_DATE
      })
    })

    it('should accept custom values for cozy metadata (creation trigger)', () => {
      const doc = {
        _type: 'io.cozy.todos',
        cozyMetadata: {
          createdByApp: 'My great app',
          doctypeVersion: 42
        }
      }
      const { cozyMetadata } = client.ensureCozyMetadata(doc, {
        event: 'creation'
      })
      expect(cozyMetadata).toEqual({
        metadataVersion: METADATA_VERSION,
        doctypeVersion: 42,
        createdByApp: 'My great app',
        sourceAccount: SOURCE_ACCOUNT_ID,
        createdByAppVersion: APP_VERSION,
        updatedByApps: [
          {
            date: MOCKED_DATE,
            slug: APP_NAME,
            version: APP_VERSION
          }
        ],
        createdAt: MOCKED_DATE,
        updatedAt: MOCKED_DATE
      })
    })

    it('should update existing cozy metadata (update trigger)', () => {
      const doc = {
        _type: 'io.cozy.todos',
        cozyMetadata: {
          metadataVersion: 2,
          doctypeVersion: 4,
          createdByApp: 'previous-app',
          updatedByApps: [
            {
              date: '2017-03-08T09:14:00.185Z',
              slug: 'previous-app',
              version: 8
            }
          ],
          updatedAt: '2017-03-08T09:14:00.185Z'
        }
      }
      const { cozyMetadata } = client.ensureCozyMetadata(doc, {
        event: 'update'
      })
      expect(cozyMetadata).toEqual({
        metadataVersion: 2,
        doctypeVersion: 4,
        createdByApp: 'previous-app',
        updatedByApps: [
          {
            date: MOCKED_DATE,
            slug: APP_NAME,
            version: APP_VERSION
          },
          {
            date: '2017-03-08T09:14:00.185Z',
            slug: 'previous-app',
            version: 8
          }
        ],
        updatedAt: MOCKED_DATE
      })
    })

    it('should not create duplicates in updatedByApps (update trigger)', () => {
      const doc = {
        _type: 'io.cozy.todos',
        cozyMetadata: {
          doctypeVersion: 4,
          createdByApp: 'previous-app',
          updatedByApps: [
            {
              date: '2017-03-08T09:14:00.185Z',
              slug: APP_NAME,
              version: 1
            }
          ],
          updatedAt: '2017-03-08T09:14:00.185Z'
        }
      }
      const { cozyMetadata } = client.ensureCozyMetadata(doc, {
        event: 'update'
      })
      expect(cozyMetadata).toEqual({
        doctypeVersion: 4,
        createdByApp: 'previous-app',
        updatedByApps: [
          {
            date: MOCKED_DATE,
            slug: APP_NAME,
            version: APP_VERSION
          }
        ],
        updatedAt: MOCKED_DATE
      })
    })
  })

  describe('query', () => {
    let query, fakeResponse
    beforeEach(() => {
      query = Q('io.cozy.todos')
      fakeResponse = { data: 'FAKE!!!' }
    })

    it('should first dispatch a INIT_QUERY action', async () => {
      await client.query(query, { as: 'allTodos' })
      expect(client.store.dispatch.mock.calls[0][0]).toEqual(
        initQuery('allTodos', { doctype: 'io.cozy.todos' })
      )
    })

    it('should then dispatch a RECEIVE_QUERY_RESULT action', async () => {
      requestHandler.mockReturnValueOnce(Promise.resolve(fakeResponse))
      await client.query(query, { as: 'allTodos' })
      expect(client.store.dispatch.mock.calls[1][0]).toEqual(
        receiveQueryResult('allTodos', fakeResponse)
      )
    })

    it('should dispatch a RECEIVE_QUERY_ERROR action if an error occurs', async () => {
      const error = new Error('Fake error')
      requestHandler.mockReturnValueOnce(Promise.reject(error))
      try {
        await client.query(query, { as: 'allTodos' })
      } catch (e) {} // eslint-disable-line no-empty
      expect(client.store.dispatch.mock.calls[1][0]).toEqual(
        receiveQueryError('allTodos', error)
      )
    })

    it('should resolve to the query response', async () => {
      requestHandler.mockReturnValueOnce(Promise.resolve(fakeResponse))
      const resp = await client.query(query)
      expect(resp).toEqual(fakeResponse)
    })

    it('should call the link with the query', async () => {
      await client.query(query)
      expect(requestHandler).toHaveBeenCalledTimes(1)
      expect(requestHandler.mock.calls[0][0]).toBe(query)
    })

    it('should handle queries with includes', async () => {
      requestHandler.mockReturnValueOnce(
        Promise.resolve({
          data: [TODO_1, TODO_2, TODO_3]
        })
      )
      requestHandler
        .mockReturnValueOnce(
          Promise.resolve({
            data: [
              { _id: 'abc', _type: 'io.cozy.files' },
              { _id: 'def', _type: 'io.cozy.files' }
            ],
            included: [
              { _id: 'abc', _type: 'io.cozy.files', name: 'abc.png' },
              { _id: 'def', _type: 'io.cozy.files', name: 'def.png' }
            ]
          })
        )
        .mockReturnValueOnce(Promise.resolve({ data: [], included: [] }))
        .mockReturnValueOnce(Promise.resolve({ data: [], included: [] }))

      const resp = await client.query(
        Q('io.cozy.todos').include(['attachments'])
      )

      expect(requestHandler).toHaveBeenCalledTimes(4)
      expect(resp).toEqual({
        data: [
          {
            ...TODO_1,
            relationships: {
              attachments: {
                data: [
                  { _id: 'abc', _type: 'io.cozy.files' },
                  { _id: 'def', _type: 'io.cozy.files' }
                ]
              }
            }
          },
          {
            ...TODO_2,
            relationships: {
              attachments: {
                data: []
              }
            }
          },
          {
            ...TODO_3,
            relationships: {
              attachments: {
                data: []
              }
            }
          }
        ],
        included: [
          { _id: 'abc', _type: 'io.cozy.files', name: 'abc.png' },
          { _id: 'def', _type: 'io.cozy.files', name: 'def.png' }
        ]
      })
    })
  })

  describe('queryAll', () => {
    let query

    beforeEach(() => {
      query = Q('io.cozy.todos')
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should call `query` until there is no more document to query', async () => {
      let i = 0
      jest.spyOn(client, 'query').mockImplementation(() => {
        let resp

        if (i === 0) {
          resp = { data: [{ _id: '0', label: 'Shopping' }], next: true }
        }

        if (i === 1) {
          resp = { data: [{ _id: '1', label: 'Laundry' }], next: true }
        }

        if (i === 2) {
          resp = { data: [{ _id: '2', label: 'Cook' }], next: true }
        }

        if (i === 3) {
          resp = { data: [{ _id: '3', label: 'Rest' }], next: false }
        }

        ++i

        return resp
      })

      const documents = await client.queryAll(query)

      expect(client.query).toHaveBeenCalledTimes(4)
      expect(documents).toMatchSnapshot()
    })
  })

  describe('mutate', () => {
    const mutation = { mutationType: 'FAKE' }
    const fakeResponse = {
      data: [{ ...TODO_1, label: 'Buy croissants', rev: 2 }]
    }

    it('should first dispatch a INIT_MUTATION action', async () => {
      await client.mutate(mutation, { as: 'updateTodo' })
      expect(client.store.dispatch.mock.calls[0][0]).toEqual(
        initMutation('updateTodo', mutation)
      )
    })

    it('should call the link with the mutation', async () => {
      await client.mutate(mutation)
      expect(requestHandler.mock.calls[0][0]).toBe(mutation)
    })

    it('should then dispatch a RECEIVE_MUTATION_RESULT action', async () => {
      requestHandler.mockReturnValueOnce(Promise.resolve(fakeResponse))
      await client.mutate(mutation, { as: 'updateTodo' })
      expect(client.store.dispatch.mock.calls[1][0]).toEqual(
        receiveMutationResult('updateTodo', fakeResponse, {}, mutation)
      )
    })

    it('should resolve to the mutation response', async () => {
      requestHandler.mockReturnValueOnce(Promise.resolve(fakeResponse))
      const resp = await client.mutate(mutation)
      expect(resp).toEqual(fakeResponse)
    })

    it('should dispatch a RECEIVE_MUTATION_ERROR action if an error occurs', async () => {
      const error = new Error('Fake error')
      requestHandler.mockReturnValueOnce(Promise.reject(error))
      try {
        await client.mutate(mutation, { as: 'updateTodo' })
      } catch (e) {} // eslint-disable-line no-empty
      expect(client.store.dispatch.mock.calls[1][0]).toEqual(
        receiveMutationError('updateTodo', error, mutation)
      )
    })

    it('should handle an array of mutations (including mutation creators)', async () => {
      const FAKE_MUTATION_1 = { mutationType: 'FAKE_1' }
      const FAKE_MUTATION_2 = resp => ({ mutationType: 'FAKE_2', resp })
      requestHandler.mockReturnValue(Promise.resolve(fakeResponse))
      await client.mutate([mutation, FAKE_MUTATION_1, FAKE_MUTATION_2])
      expect(requestHandler).toHaveBeenCalledTimes(3)
      expect(requestHandler.mock.calls[0][0]).toBe(mutation)
      expect(requestHandler.mock.calls[1][0]).toBe(FAKE_MUTATION_1)
      expect(requestHandler.mock.calls[2][0]).toEqual({
        mutationType: 'FAKE_2',
        resp: fakeResponse
      })
    })
  })

  describe('hydratation', () => {
    it('getQueryFromState should hydrate the documents if asked', async () => {
      client.store.dispatch.mockRestore()
      client.requestQuery = async ({ doctype }) => {
        if (doctype === 'io.cozy.todos') {
          return {
            data: [TODO_WITH_AUTHOR]
          }
        } else if (doctype == 'io.cozy.persons') {
          return {
            data: AUTHORS
          }
        }
      }
      await client.query({ doctype: 'io.cozy.todos' }, { as: 'todos' })
      await client.query({ doctype: 'io.cozy.persons' }, { as: 'people' })

      const { data: rawTodos } = client.getQueryFromState('todos')

      const { data: hydratedTodos } = client.getQueryFromState('todos', {
        hydrated: true
      })

      expect(rawTodos[0].authors).toBeUndefined()

      // Since the todo is hydrated, we can access authors through the relationship
      expect(hydratedTodos[0].authors.data[0].name).toBe('Alice')
    })

    it('should hydrate relationships into associations with helper methods in the context of a query', () => {
      const doc = client
        .hydrateDocuments(
          'io.cozy.todos',
          [
            {
              ...TODO_1,
              relationships: {
                attachments: {
                  data: [
                    { _id: 'abc', _type: 'io.cozy.files' },
                    { _id: 'def', _type: 'io.cozy.files' }
                  ]
                }
              }
            }
          ],
          'allTodos'
        )
        .shift()
      expect(doc.attachments).toBeInstanceOf(HasManyFiles)
      expect(doc.authors).toBeInstanceOf(HasMany)
    })

    it('makes new documents', () => {
      const newTodo = client.makeNewDocument('io.cozy.todos')
      expect(newTodo._type).toBe('io.cozy.todos')
      expect(newTodo.attachments).not.toBe(undefined)
      expect(newTodo.attachments instanceof HasManyFiles).toBe(true)
    })

    it('should not fail on null (when getting absent documents from the store)', () => {
      const doc = client
        .hydrateDocuments('io.cozy.todos', [null], 'allTodos')
        .shift()
      expect(doc).toBe(null)
    })
  })

  describe('Instance options', () => {
    it('should expose options loaded via the DOM', () => {
      const options = { cozyDomain: 'cozy.tools', cozyToken: 'abc123' }

      const globalQuerySelectorBefore = document.querySelector
      document.querySelector = jest.fn().mockReturnValue({ dataset: options })

      const client = new CozyClient({})
      client.loadInstanceOptionsFromDOM()
      expect(client.getInstanceOptions()).toEqual(options)

      document.querySelector = globalQuerySelectorBefore
    })
  })
})
