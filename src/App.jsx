import "./App.sass"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/layout"
import SignIn from "./pages/auth/signin"
import SignUp from "./pages/auth/signup"
import AddInfo from "./pages/insription/add-info"
import Hero from "./pages/hero/hero"
import { useContext, useEffect } from "react"
import ThemeContext from "./context/theme-context"
import AuthContext from "./context/auth-context"
import NotificationContext from "./context/notification-context"
import { toast, ToastContainer } from "react-toastify"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Newfeed from "./pages/new-feed/new-feed"
import DashBoard from "./components/dashboard/dashboard"
import Chat from "./pages/chat"
import Tasks from "./components/task/tasks"
import Statistique from "./pages/statistique/main-statistic"
import Payment from "./pages/payment/payment-method"
import NewPublication from "./pages/new-publication/new-publicaton"

function App() {
  const { theme, nightMode } = useContext(ThemeContext)
  const { isLoggedIn } = useContext(AuthContext)
  const { notification } = useContext(NotificationContext)
  const location = useLocation()
  useEffect(() => {
    if (!notification.type) return
    toast[notification.type](notification.message)
  }, [notification])
  return (
    <div data-theme={nightMode ? "dark" : "light"} id="apping">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/" element={isLoggedIn ? <Layout /> : <Hero />} /> */}
          <Route path="" element={<Layout />}>
            <Route path="" element={<DashBoard />} />
            <Route path="actualites" element={<Newfeed />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="payement" element={<Payment />} />
            <Route path="statistiques" element={<Statistique />} />
            <Route path="nouveau-publication" element={<NewPublication />} />
          </Route>
          <Route path="/ajout-info" element={<AddInfo />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="auth">
            <Route path="connexion" element={<SignIn />} />
            <Route path="inscription" element={<SignUp />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer autoClose={5000} limit={3} draggable pauseOnHover />
    </div>
  )
}

export default App

{
  /* <Route path="/" element={<Navigate replace to="/auth/connexion" />} /> */
}
