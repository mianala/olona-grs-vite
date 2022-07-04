import { useState, useEffect, createContext } from "react"

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  info: {},
  login: (token) => {},
  logout: () => {},
  register: (token) => {},
  setInfo: (info) => {},
})
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [info, setInfo] = useState(null)
  const isLoggedIn = !!token

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    const localInfo = localStorage.getItem("info")
    if (localToken) {
      setToken(localToken)
      setInfo(JSON.parse(localInfo))
    }
  }, [])
  const login = (token) => {
    setToken(token)
    localStorage.setItem("token", token)
  }
  const register = (token) => {
    setToken(token)
    localStorage.setItem("token", token)
  }
  const logout = () => {
    setToken(null)
    setInfo({})
    localStorage.clear()
  }
  const setInfoFunc = (info) => {
    setInfo(info)
    localStorage.setItem("info", JSON.stringify(info))
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        info,
        login,
        logout,
        register,
        setInfo: setInfoFunc,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
