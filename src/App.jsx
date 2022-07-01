import "./App.sass"
import { Routes, Route } from "react-router-dom"
import MainDashBoard from "./components/dashboard/main-dashboard"
import SignIn from "./pages/auth/signin"
import SignUp from "./pages/auth/signup"
import AddInfo from "./pages/insription/add-info"
import Hero from "./pages/hero/hero"
import { useContext, useEffect } from "react"
import ThemeContext from "./context/theme-context"
import AuthContext from "./context/auth-context"
import NotificationContext from "./context/notification-context"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const { theme, nightMode } = useContext(ThemeContext)
  const { isLoggedIn } = useContext(AuthContext)
  const { notification } = useContext(NotificationContext)
  useEffect(() => {
    if (!notification.type) return
    toast[notification.type](notification.message)
  }, [notification])
  return (
    <div data-theme={nightMode ? "dark" : "light"}>
      <Routes>
        <Route path="/" element={isLoggedIn ? <MainDashBoard /> : <Hero />} />
        <Route path="/ajout-info" element={<AddInfo />} />
        <Route path="auth">
          <Route path="connexion" element={<SignIn />} />
          <Route path="inscription" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={5000} limit={4} draggable pauseOnHover />
    </div>
  )
}

export default App

{
  /* <Route path="/" element={<Navigate replace to="/auth/connexion" />} /> */
}
