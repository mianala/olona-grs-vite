import { useEffect, useState } from "react"
const CalendarChoix = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=15")
      const data = await res.json()
      const result = data.result
      setUsers(result)
    }
    fetchUsers()
  }, [])
  return <>hello</>
}
export default CalendarChoix
