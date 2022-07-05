import classes from "./dashlayout.module.sass"
import MainSideNav from "../side-nav/open-sidenav"
import MainTopNav from "../top-bar/main-top"
import { Outlet } from "react-router-dom"
import { useMedia } from "react-use"

const MainDashBoard = () => {
  const isWide = useMedia("(min-width: 860px)")
  return (
    <div className={isWide ? classes.container : classes.mobile}>
      <div className={`${classes.sidenav} ${isWide ? "" : "hidden"}`}>
        <MainSideNav />
      </div>
      <div className={classes.top_outlet}>
        <MainTopNav isWide={isWide} />
        <main className="mx-3">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default MainDashBoard
