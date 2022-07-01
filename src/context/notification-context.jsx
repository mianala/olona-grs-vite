import { useState, createContext } from "react"
const NotificationContext = createContext({
  open: false,
  toast: [],
})
export const NotificationContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState([])
  const openToast = (toast, related = false) => {
    if (related) {
      setToast([toast])
    }
    setToast((prev) => [...prev, toast])
    setOpen(true)
  }
  const closeToast = () => {
    setOpen(false)
    setToast([])
  }
  return (
    <NotificationContext.Provider
      value={{
        open,
        openToast,
        closeToast,
        toast,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
