import classes from "./dashlayout.module.sass"
import MainSideNav from "../side-nav/open-sidenav"
import MainTopNav from "../top-bar/main-top"
import { Outlet } from "react-router-dom"
import { useMedia } from "react-use"

const MainDashBoard = () => {
  const isWide = useMedia("(min-width: 860px)")
  return (
    <div className={classes.container}>
      <div className={`${classes.sidenav} ${isWide ? "" : "hidden"}`}>
        <MainSideNav />
      </div>
      <div className={classes.top_outlet}>
        <div>
          <MainTopNav isWide={isWide} />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default MainDashBoard
