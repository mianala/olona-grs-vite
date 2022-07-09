import App from "./App"
import "./index.sass"
import "react-toastify/dist/ReactToastify.css"
// import "react-modern-calendar-datepicker/lib/DatePicker.css"
// import "react-time-picker/dist/TimePicker.css"
// import "react-clock/dist/Clock.css"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeContextProvider } from "./context/theme-context"
import { AuthContextProvider } from "./context/auth-context"
import { NotificationContextProvider } from "./context/notification-context"
import { StoreContextProvider } from "./context/data-context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthContextProvider>
      <ThemeContextProvider>
        <NotificationContextProvider>
          <StoreContextProvider>
            <App />
          </StoreContextProvider>
        </NotificationContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </Router>
)
