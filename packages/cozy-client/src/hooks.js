import { useContext } from 'react'
import clientContext from './context'

export const useClient = () => {
  const { client } = useContext(clientContext)
  return client
}
