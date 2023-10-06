import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const IsOpenModalContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <IsOpenModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </IsOpenModalContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
