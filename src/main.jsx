import App from "./App"
import "./index.sass"
import "react-toastify/dist/ReactToastify.css"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeContextProvider } from "./context/theme-context"
import { AuthContextProvider } from "./context/auth-context"
import { NotificationContextProvider } from "./context/notification-context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthContextProvider>
      <ThemeContextProvider>
        <NotificationContextProvider>
          <App />
        </NotificationContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </Router>
)
