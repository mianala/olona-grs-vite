import { useState, createContext, useEffect } from "react"
const NotificationContext = createContext({
  notification: {
    type: null,
    message: null,
  },
  notify: (type, message) => () => {},
})
export const NotificationContextProvider = ({ children }) => {
  const [toast, setToast] = useState({
    type: null,
    message: null,
  })
  const notify = (type, message) => () => {
    setToast({
      type,
      message,
    })
  }
  useEffect(() => {
    if (!toast.type) return
    const timeout = setTimeout(() => {
      setToast({
        type: null,
        message: null,
      })
    }, 5000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <NotificationContext.Provider value={{ notify, notification: toast }}>
      {children}
    </NotificationContext.Provider>
  )
}
export default NotificationContext
