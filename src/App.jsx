import "./App.sass"
import { Routes, Route } from "react-router-dom"
import MainDashBoard from "./components/dashboard/main-dashboard"
import SignIn from "./pages/auth/signin"
import SignUp from "./pages/auth/signup"
import AddInfo from "./pages/insription/add-info"
import Hero from "./pages/hero/hero"
import { useContext } from "react"
import ThemeContext from "./context/theme-context"
import AuthContext from "./context/auth-context"

function App() {
  const { theme } = useContext(ThemeContext)
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <div data-theme={theme}>
      <Routes>
        <Route path="/" element={isLoggedIn ? <MainDashBoard /> : <Hero />} />

        <Route path="/ajout-info" element={<AddInfo />} />
        <Route path="auth">
          <Route path="connexion" element={<SignIn />} />
          <Route path="inscription" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

{
  /* <Route path="/" element={<Navigate replace to="/auth/connexion" />} /> */
}
