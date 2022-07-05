import { useState, createContext } from "react"
const DataStore = createContext()
export const StoreContextProvider = ({ children }) => {
  return <DataStore.Provider value={{}}>{children}</DataStore.Provider>
}
export default DataStore
