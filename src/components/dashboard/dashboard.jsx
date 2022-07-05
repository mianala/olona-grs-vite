import Calendar from "./calendar-choice"
import Compte from "./choix-compte"
import classes from "./dashboard.module.sass"
import { useReducer } from "react"

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "setCompte":
      return {
        ...state,
        compte: action.payload,
      }
    case "setPlatform":
      return {
        ...state,
        platform: action.payload,
      }
    case "setDate":
      return {
        ...state,
        date: action.payload,
      }
    default:
      return state
  }
}

function DashBoard() {
  const [info, dispatch] = useReducer(reducerFunc, {
    compte: null,
    platform: null,
    date: null,
  })
  return (
    <div className={classes.container + " " + "gap-3"}>
      <Compte dispatch={dispatch} />
      <Calendar dispatch={dispatch} />
    </div>
  )
}

export default DashBoard
