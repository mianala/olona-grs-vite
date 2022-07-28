import { useEffect, useRef, useState, useContext } from "react"
import { personImg } from "../../assets/url/images"
import { MdClear } from "react-icons/md"
import AccountContext from "../../context/account-context"
import {socialIcon} from "../../components/neccessities/icon"
const dummy_ava  = [
          {
            id: 1,
            social_media: "facebook",
            manager: "Strawberry",
            intrest: "Marketing",
          },
          {
            id: 2,
            social_media: "twitter",
            manager: "Tech mark",
            intrest: "Logo",
          },
          {
            id: 3,
            social_media: "instagram",
            manager: `Lorem ipsum`,
            intrest: "Design",
          },
          {
            id: 4,
            social_media: "youtube",
            manager: `publicite`,
            intrest: "Video",
          },
          {
            id: 5,
            social_media: "linkedin",
            manager: `Recruit tech`,
            intrest: "Recruitement",
          },
        ]

export default function CalendarChoix () {
  const AccountCtx = useContext(AccountContext)
  const searchRef = useRef()
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [matched, setMatched] = useState([])
  const [available, setAvailable] = useState(null)
  const [platform, setPlatform] = useState(null)

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
        setAvailable(dummy_ava)
        return
      }
    }
    setMatched(matched)
  }, [search])
  const clickUser = (user) => {
    setSearch(user)
    setAvailable(dummy_ava)
    setPlatform(null)
  }
  const handlePage = (page) => () => {
    setPlatform(page)
  }
  const handleClearSearch = () => {
    setSearch("")
    setPlatform(null)
  }
  return (
    <div>
      <div className="form-control w-full max-w-xs relative">
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
        <button
          className="absolute p-2 -translate-y-1/2 rounded-full -bottom-2 right-4"
          type="button"
          onClick={handleClearSearch}
        >
          <MdClear />
        </button>
      </div>
      <div className="my-5">
        {matched === null
          ? available?.map(({ id, social_media, manager, intrest }, index) => {
              let checked = false
              if (platform !== null) {
                if (id === platform.id) {
                  checked = true
                }
              }
              return (
                <div
                  key={id}
                  onClick={handlePage({
                    id: id,
                    social_media: social_media,
                    manager: manager,
                  })}
                >
                  {index === 0 && (
                    <h6 className="underline pb-2">
                      Liste de pages pour ce compte
                    </h6>
                  )}
                  <div
                    className={`flex space-x-4 p-2 hover:bg-emerald-100 cursor-pointer rounded-lg ${
                      checked ? "bg-emerald-400" : ""
                    }`}
                  >
                    <div>
                      <img
                        src={socialIcon[social_media.toLowerCase() + "Icon"]}
                        alt=""
                        className="object-cover w-7 h-7"
                      />
                    </div>
                    <h5 className="font-bold">{manager}</h5>
                  </div>
                </div>
              )
            })
          : matched?.map(
              ({ login: { uuid }, name: { first, last }, img, phone }) => {
                return (
                  <div
                    className="flex items-center space-x-3 cursor-pointer hover:bg-slate-200 p-2  rounded-lg"
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
