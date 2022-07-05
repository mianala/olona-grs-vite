import { IoIosNotificationsOutline } from "react-icons/io"
import { useContext } from "react"
import ThemeContext from "../../context/theme-context"
import { GiHamburgerMenu } from "react-icons/gi"
import OpenSideNav from "../side-nav/open-sidenav"
import { AiOutlineCloseCircle } from "react-icons/ai"
const MainTopNav = ({ isWide }) => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mr-2">
        {isWide ? (
          ""
        ) : (
          <>
            <label htmlFor="open-side" className="btn modal-button btn-outline">
              <GiHamburgerMenu />
            </label>

            <input type="checkbox" id="open-side" className="modal-toggle" />
            <label htmlFor="open-side" className="modal cursor-pointer">
              <div className="modal-box side-hide">
                <label
                  htmlFor="open-side"
                  className="btn btn-circle btn-outline absolute right-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
                <OpenSideNav />
                <div className="modal-action">
                  <label htmlFor="open-side" className="btn">
                    close
                  </label>
                </div>
              </div>
            </label>
          </>
        )}
      </div>
      <div className="flex-none gap-2">
        {isWide ? (
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        ) : (
          ""
        )}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IoIosNotificationsOutline className="w-6 h-6" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoIosNotificationsOutline className="w-6 h-6" />

              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="1" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex="1"
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
