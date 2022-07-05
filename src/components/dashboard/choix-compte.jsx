import { useEffect, useRef, useState } from "react"
import { personImg } from "../../assets/url/images"

const CalendarChoix = ({ dispatch }) => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [matched, setMatched] = useState([])
  const searchRef = useRef()
  const [available, setAvailable] = useState(null)
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
    if (matched.length === 1) {
      if (`${matched[0].name.first} ${matched[0].name.last}` === search) {
        setMatched(null)
        dispatch({ type: "setCompte", payload: matched[0] })
        setAvailable([
          {
            id: 1,
            social_media: "facebook",
            manager: `${matched[0].name.first} ${matched[0].name.last}`,
            intrest: "Marketing",
          },
          {
            id: 2,
            social_media: "twitter",
            manager: `${matched[0].name.first} ${matched[0].name.last}`,
            intrest: "Logo",
          },
          {
            id: 3,
            social_media: "instagram",
            manager: `${matched[0].name.first} ${matched[0].name.last}`,
            intrest: "Design",
          },
          {
            id: 4,
            social_media: "youtube",
            manager: `${matched[0].name.first} ${matched[0].name.last}`,
            intrest: "Video",
          },
          {
            id: 5,
            social_media: "linkedin",
            manager: `${matched[0].name.first} ${matched[0].name.last}`,
            intrest: "Recruitement",
          },
        ])
        return
      }
    }
    setMatched(matched)
  }, [search])
  const clickUser = (user) => {
    setSearch(user)
    dispatch({ type: "setCompte", payload: user })
    console.log(user)
    setAvailable([
      {
        id: 1,
        social_media: "facebook",
        manager: user,
        intrest: "Marketing",
      },
      {
        id: 2,
        social_media: "twitter",
        manager: user,
        intrest: "Logo",
      },
      {
        id: 3,
        social_media: "instagram",
        manager: user,
        intrest: "Design",
      },
      {
        id: 4,
        social_media: "youtube",
        manager: user,
        intrest: "Video",
      },
      {
        id: 5,
        social_media: "linkedin",
        manager: user,
        intrest: "Recruitement",
      },
    ])
  }
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Choisissez une compte</span>
          <span className="label-text-alt"></span>
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
        {matched === null
          ? available?.map(({ id, social_media, manager, intrest }) => {
              return (
                <div
                  className="flex space-x-4 p-2 hover:bg-slate-200 rounded-lg cursor-pointer"
                  key={id}
                >
                  <div>
                    <img
                      src={`https://source.unsplash.com/100x100/?${social_media}`}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{manager}</h4>
                    <span className="text-xs dark:text-gray-400">
                      {social_media} - {intrest}
                    </span>
                  </div>
                </div>
              )
            })
          : matched?.map(
              ({ login: { uuid }, name: { first, last }, img, phone }) => {
                return (
                  <div
                    className="flex items-center space-x-3 cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
                    key={uuid}
                    onClick={() => clickUser(first + " " + last)}
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
                      <div className="text-sm opacity-50">{phone}</div>
                    </div>
                  </div>
                )
              }
            )}
      </div>
    </div>
  )
}
export default CalendarChoix
