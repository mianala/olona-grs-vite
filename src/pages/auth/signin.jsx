import { motion } from "framer-motion";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignIn() {
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate();
  const loginHandle = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login_data = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const logining = async () => {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login_data),
      });
      const res = await response.json();
      if (res.jwt) {
        login(res.jwt);
        Navigate("/");
      }
    };
    toast.promise(logining, {
      pending: "Promise is pending",
      success: "Connecte 👌",
      error: "Promise rejected 🤯",
    });
  };
  return (
    <motion.div>
      <section className="relative flex flex-wrap sm:h-screen sm:items-center  lg:h-screen lg:items-center">
        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/team-1.jpeg"
            alt=""
          />
        </div>
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">Connexion</h3>
          </div>

          <form
            action=""
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
            onSubmit={loginHandle}
          >
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Entrer votre email"
                  name="email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Entrer mot de passe"
                  name="password"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button className="btn btn-block btn-secondary" type="submit">
              Connexion
            </button>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Pas de compte?{" "}
                <a className="underline" href="/auth/inscription">
                  S'inscrire
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
