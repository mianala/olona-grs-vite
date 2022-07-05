import { useEffect, useRef, useState } from "react"
import { personImg } from "../../assets/url/images"

const CalendarChoix = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [matched, setMatched] = useState([])

  const searchRef = useRef()
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=10")
      const data = await res.json()
      const result = data.results
      setUsers(result)
    }
    fetchUsers()
  }, [])
  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full max-w-xs"
        ref={searchRef}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <div>
        {users?.map(({ login: { uuid }, name: { first, last } }) => {
          return (
            <div className="flex items-center space-x-3" key={uuid}>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={
                      personImg[Math.floor(Math.random() * personImg.length)]
                        .urls.small
                    }
                    alt="Avatar Account"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">
                  {first}
                  {""} {last}
                </div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CalendarChoix
