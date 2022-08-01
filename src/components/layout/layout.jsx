import classes from "./dashlayout.module.sass"
import MainSideNav from "../side-nav/open-sidenav"
import MainTopNav from "../top-bar/main-top"
import { Outlet } from "react-router-dom"
import { useMedia } from "react-use"
import AccountModifier from "./account-modifier"
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'
const show = ["/", "/dashboard", "/actualites", "/statistiques", 
"/notifications", "/prospects"]
const MainDashBoard = () => {
  const isWide = useMedia("(min-width: 860px)")
  const [shown, setShown] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    if (show.includes(pathname)) {setShown(true)}
    else { setShown(false)}
  }, [pathname])
  return (
    <div className={isWide ? classes.container : classes.mobile}>
      <div className={`${classes.sidenav} ${isWide ? "" : "hidden"}`}>
        <MainSideNav />
      </div>
      <div className={classes.top_outlet}>
        <MainTopNav isWide={isWide} />
        <main className={`mx-3 ${shown ? 'grid-cols-[1fr_3fr] grid' : ''}`}>
              {shown ? <AccountModifier /> : "" }
            <Outlet />
        </main>
      </div>
    </div>
  )
}
export default MainDashBoard
