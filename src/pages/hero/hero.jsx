import MainTop from "../../components/top-bar/main-top"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo/postin.png"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-screen flex flex-col">
        <MainTop />
        <div className="hero bg-base-200 flex-grow">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <img src={logo} alt="" />
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex gap-2">
                <NavLink to="/auth/inscription">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-primary"
                  >
                    Get Started
                  </motion.button>
                </NavLink>
                <NavLink to="/auth/connexion">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-primary"
                  >
                    Sign in
                  </motion.button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Hero
