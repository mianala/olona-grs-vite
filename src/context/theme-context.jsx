import { useState, createContext } from "react"
const ThemeContext = createContext({
  theme: "light",
})
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [nightMode, setNightMode] = useState(false)
  const toggleTheme = () => {
    setNightMode((prev) => !prev)
  }
  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        nightMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContext
