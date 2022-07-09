import logo from "../../assets/logo/postin.png"
import {
  AiOutlineDoubleLeft,
  AiOutlineCheck,
  AiOutlineCalendar,
  AiOutlineSetting,
} from "react-icons/ai"
import { CgFeed, CgLogOut } from "react-icons/cg"
import {
  FcHome,
  FcTodoList,
  FcPositiveDynamic,
  FcFeedback,
  FcSms,
  FcBusinessContact,
  FcConferenceCall,
  FcAssistant,
} from "react-icons/fc"
import { MdManageAccounts, MdAssignmentTurnedIn } from "react-icons/md"
import {
  IoIosNotificationsOutline,
  IoIosHelpCircleOutline,
} from "react-icons/io"
import { BsFillPersonCheckFill, BsPencilSquare } from "react-icons/bs"
import { BsPen } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { useState } from "react"
export default function MainSideNav() {
  const [active, setActive] = useState("dashboard")
  const activeHandler = (clicked) => () => {
    setActive(clicked)
  }
  return (
    <div className="px-1 py-3 side-hide flex flex-col justify-between max-h-screen relative shadow-sm overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-start mx-6">
        <img className="h-12" src={logo} />
      </div>
      {/* <div className="flex items-center py-1 mt-6 space-x-4 px-3">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">
            {"Tianiazy Marindrano".split(" ")[0]}
          </h2>
          <span className="flex items-center space-x-1">
            <NavLink
              rel="noopener noreferrer"
              to="/profile"
              className="text-xs hover:underline dark:text-gray-400"
            >
              Mon Profil
            </NavLink>
          </span>
        </div>
      </div> */}
      <nav className="flex flex-col mt-6 space-y-1">
        <NavLink to="">
          <div
            className={`flex items-center px-4 py-2 text-gray-700 rounded-lg + ${
              active === "dashboard" ? " bg-gray-100" : ""
            }`}
          >
            <FcHome />

            <span className="ml-3 text-sm font-medium"> Tableau de bord </span>
          </div>
        </NavLink>
        <NavLink to="nouveau-publication">
          <div
            className={`flex items-center px-4 py-2 text-gray-700 rounded-lg  ${
              active === "pub" ? " bg-gray-100" : ""
            }`}
            onClick={activeHandler("pub")}
          >
            <BsPencilSquare />

            <span className="ml-3 text-sm font-medium">
              {" "}
              Crée une publication{" "}
            </span>
          </div>
        </NavLink>

        <details className="group">
          <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
            <FcTodoList />

            <span className="ml-3 text-sm font-medium"> Tache a faire </span>

            <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav className="mt-1.5 ml-8 flex flex-col">
            <NavLink
              to="/tache/finie"
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <AiOutlineCheck />

              <span className="ml-3 text-sm font-medium"> Finie </span>
            </NavLink>

            <NavLink
              to="/tache/en-cours"
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <AiOutlineCalendar />

              <span className="ml-3 text-sm font-medium"> Planification </span>
            </NavLink>
          </nav>
        </details>

        <NavLink
          to="/actualites"
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <CgFeed />

          <span className="ml-3 text-sm font-medium"> Fils d' actualites </span>
        </NavLink>

        <NavLink
          to="reception"
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <FcFeedback />

          <span className="ml-3 text-sm font-medium"> Boite de reception </span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <FcSms />

          <span className="ml-3 text-sm font-medium"> Conversation </span>
        </NavLink>
        <NavLink
          to="statistiques"
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <FcPositiveDynamic />

          <span className="ml-3 text-sm font-medium"> Statistiques </span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <BsPen />

          <span className="ml-3 text-sm font-medium"> Memos et notes </span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <IoIosNotificationsOutline />

          <span className="ml-3 text-sm font-medium"> Notification </span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <FcBusinessContact />

          <span className="ml-3 text-sm font-medium"> Fiche de prospects </span>
        </NavLink>

        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <MdManageAccounts />
          <span className="ml-3 text-sm font-medium">Gerer les comptes</span>
        </NavLink>
        <details className="group">
          <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
            <FcConferenceCall />

            <span className="ml-3 text-sm font-medium">
              {" "}
              Gerer les equipes{" "}
            </span>

            <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav className="mt-1.5 ml-8 flex flex-col">
            <NavLink
              to=""
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <BsFillPersonCheckFill />

              <span className="ml-3 text-sm font-medium"> Membres </span>
            </NavLink>

            <NavLink
              to=""
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <MdAssignmentTurnedIn />

              <span className="ml-3 text-sm font-medium"> Assigned </span>
            </NavLink>
          </nav>
        </details>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <IoIosHelpCircleOutline />
          <span className="ml-3 text-sm font-medium">Aides et ressources</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <AiOutlineSetting />
          <span className="ml-3 text-sm font-medium">Parametre</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <FcAssistant />
          <span className="ml-3 text-sm font-medium">services clients</span>
        </NavLink>
        <a
          href="/"
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <CgLogOut />
          <span className="ml-3 text-sm font-medium">Deconnexion</span>
        </a>
      </nav>
    </div>
  )
}
