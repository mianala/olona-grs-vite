import classes from "./dashlayout.module.sass";
import MainSideNav from "../side-nav/main-sidenav";
import MainTopNav from "../top-bar/main-top";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
const MainDashBoard = () => {
  return (
    <motion.div className={classes.container}>
      <div className={classes.sidenav}>
        <MainSideNav />
      </div>
      <div className={classes.top_outlet}>
        <div>
          <MainTopNav />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </motion.div>
  );
};
export default MainDashBoard;
