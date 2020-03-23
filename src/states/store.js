import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'
import { reducer, initialState } from './reducer'

const store = createContext({
  state: {},
  dispatch: () => {},
})

const { Provider } = store

const ProviderState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Provider value={value}>{children}</Provider>
}

ProviderState.propTypes = {
  children: PropTypes.any.isRequired,
}

export default store
export { ProviderState }
