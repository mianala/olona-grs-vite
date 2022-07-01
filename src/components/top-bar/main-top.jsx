import { IoIosNotificationsOutline } from "react-icons/io"
import { useContext } from "react"
import ThemeContext from "../../context/theme-context"
const MainTopNav = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Post In</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IoIosNotificationsOutline className="w-6 h-6" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
            <li>
              <label className="label cursor-pointer flex justify-between p-2">
                <span className="label-text">Dark Theme</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onChange={() => toggleTheme()}
                />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default MainTopNav
