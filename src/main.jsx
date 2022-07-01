import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeContextProvider } from "./context/theme-context"
import App from "./App"
import "./index.sass"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Router>
)
