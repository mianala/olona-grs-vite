import { IoIosNotificationsOutline } from "react-icons/io"
import { useContext } from "react"
import ThemeContext from "../../context/theme-context"
import { GiHamburgerMenu } from "react-icons/gi"
import OpenSideNav from "../side-nav/open-sidenav"
const MainTopNav = ({ isWide }) => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mr-2">
        {isWide ? (
          ""
        ) : (
          <>
            <label htmlhtmlFor="open-side" className="btn modal-button btn-outline">
              <GiHamburgerMenu />
            </label>

            <input type="checkbox" id="open-side" className="modal-toggle" />
            <label htmlhtmlFor="open-side" className="modal cursor-pointer">
              <div className="modal-box side-hide">
                <label
                  htmlhtmlFor="open-side"
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
                  <label htmlhtmlFor="open-side" className="btn">
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
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="-10 -10 3020 2020"
            >
              <g>
                <rect
                  fill="rgb(0%,14%,58%)"
                  x="0"
                  y="0"
                  width="1010"
                  height="2000"
                />
                <rect
                  fill="rgb(97%,97%,97%)"
                  x="1000"
                  y="0"
                  width="1010"
                  height="2000"
                />
                <rect
                  fill="rgb(93%,16%,22%)"
                  x="2000"
                  y="0"
                  width="1000"
                  height="2000"
                />
                <rect
                  fill="none"
                  stroke="rgb(55%,55%,55%)"
                  strokeWidth="10"
                  x="0"
                  y="0"
                  width="3000"
                  height="2000"
                />
              </g>
            </svg>
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
            className="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
                <ul className="space-y-12">
                  <li className="flex items-start space-x-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center h-8 text-sm hover:underline"
                    >
                      v3.2.0
                    </a>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                          ></span>
                          <span className="group-hover:underline dark:text-gray-100">
                            Feature
                          </span>
                        </a>
                        <span className="text-xs whitespace-nowrap">
                          10h ago
                        </span>
                      </div>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tincidunt nunc ipsum tempor purus vitae id.
                          Morbi in vestibulum nec varius. Et diam cursus quis
                          sed purus nam. Scelerisque amet elit non sit ut
                          tincidunt condimentum. Nisl ultrices eu venenatis
                          diam.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center h-8 text-sm hover:underline"
                    >
                      v3.1.9
                    </a>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                          ></span>
                          <span className="group-hover:underline dark:text-gray-100">
                            Bugfix
                          </span>
                        </a>
                        <span className="text-xs whitespace-nowrap">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p>
                          Scelerisque amet elit non sit ut tincidunt
                          condimentum. Nisi ultrices eu venenatis diam.
                        </p>
                        <p>
                          Illum quaerat ab inventore, eveniet repudiandae saepe,
                          iste sed molestias laborum atque, quos reprehenderit
                          fugit cumo!
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
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
