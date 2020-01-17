import { useEffect, useContext, useMemo } from 'react'
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

const uniqueValue = () => {
  return (
    new Date().getTime().toString(36) + (Math.random() * 10 ** 18).toString(36)
  )
}

export const useQuery = ({ query }) => {
  if (process.env.NODE_ENV !== 'prod' && !useSelector) {
    throw new Error(
      'You must use react-redux > 7.1.0 to use useQuery (uses useSelector) under the hood'
    )
  }

  if (!query) {
    console.warn('Bad query', query)
    throw new Error('Bad query')
  }

  const as = useMemo(() => query.as || uniqueValue())

  const definition = resolveQueryDefinition(query)

  if (!definition) {
    throw new Error('query should have as query|definition property')
  }

  const client = useClient()
  const data = useSelector(() => {
    return client.getQueryFromState(as, {
      hydrated: true
    })
  })
  useEffect(() => {
    const shouldFetch = query.fetchPolicy ? query.fetchPolicy(data) : true
    if (shouldFetch) {
      client.query(definition, { as })
    }
  }, [query, as])

  const fetchMore = () => {
    throw new Error('Should be implemented')
  }
  return { data: data, fetchMore: fetchMore }
}
