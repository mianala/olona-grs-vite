import MainTop from "../../components/top-bar/main-top"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo/logo.svg"

const Hero = () => {
  return (
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
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-2">
              <NavLink to="/auth/inscription">
                <button className="btn btn-primary">Get Started</button>
              </NavLink>
              <NavLink to="/auth/connexion">
                <button className="btn btn-primary">Sign in</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
