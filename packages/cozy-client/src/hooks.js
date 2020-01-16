import { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import clientContext from './context'

export const useClient = () => {
  const { client } = useContext(clientContext)
  return client
}

const resolveQueryDefinition = query => {
  const value = query.query || query.definition
  return typeof value === 'function' ? value() : value
}

export const useQuery = ({ query }) => {
  if (process.env.NODE_ENV !== 'prod' && !useSelector) {
    throw new Error(
      'You must use react-redux > 7.1.0 to use useQuery (uses useSelector) under the hood'
    )
  }
  if (!query || !query.as) {
    console.warn('Bad query', query)
    throw new Error('query should have the `as` property')
  }

  const definition = resolveQueryDefinition(query)

  if (!definition) {
    throw new Error('query should have as query|definition property')
  }

  const client = useClient()
  const data = useSelector(() => {
    return client.getQueryFromState(query.as, {
      hydrated: true
    })
  })
  useEffect(() => {
    const shouldFetch = query.fetchPolicy ? query.fetchPolicy(data) : true
    if (shouldFetch) {
      client.query(definition, { as: query.as })
    }
  }, [query])

  const fetchMore = () => {
    throw new Error('Should be implemented')
  }
  return { data: data, fetchMore: fetchMore }
}
