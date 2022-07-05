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
      const result = data.results.map((data, index) => {
        return { ...data, img: personImg[index].urls.small }
      })
      setUsers(result)
      setMatched(result)
    }
    fetchUsers()
  }, [])
  useEffect(() => {
    const matched = users.filter((user) => {
      return `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(search.toLowerCase())
    })
    setMatched(matched)
  }, [search])
  return (
    <>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Choisissez une compte</span>
          <span class="label-text-alt"></span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs outline-none"
          ref={searchRef}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </div>
      <div className="my-5">
        {matched?.map(({ login: { uuid }, name: { first, last }, img }) => {
          return (
            <div
              className="flex items-center space-x-3 cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
              key={uuid}
            >
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={img} alt="Avatar Account" />
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
