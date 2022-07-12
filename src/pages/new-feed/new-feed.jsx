import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Compte from "../../components/dashboard/choix-compte"
import classes from "./feedlayout.module.sass"
import { FcCalendar } from "react-icons/fc"
import { useReducer } from "react"
import { FcNews } from "react-icons/fc"

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

export default function Newfeed() {
  const [today, setToday] = useState(new Date())
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const getProduct = async () => {
      const productsReq = await fetch("https://fakestoreapi.com/products")
      const response = await productsReq.json()
      setProduct(response)
    }
    getProduct()
  }, [])

  const [info, dispatch] = useReducer(reducerFunc, {
    compte: null,
    platform: null,
    date: null,
  })
  return (
    <div className={classes.container + " " + "gap-3"}>
      <Compte />
      <div>
        <div className="w-full mb-2">
          <div className="flex justify-between px-5 items-center">
            <div className=" flex items-center my-5">
              <FcNews className="w-12 h-12" />
              <span className="text-3xl font-bold">Fils d'actualités</span>
            </div>
            <div className="flex gap-2">
              <div className="btn btn-outline  flex items-center">
                <FcCalendar className="w-6 h-6 mr-4" />
                {today.toLocaleDateString("fr", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-5 mx-10" />
        <div className="masonry md:masonry-sm lg:masonry-md xl:masonry-lg overflow-wrap-anywhere my-2 w-auto mx-4">
          {product?.map(({ id, title, price, description, rating, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.61, 1, 0.88, 1],
                },
              }}
              whileHover={{ scale: 1.01 }}
              exit={{ opacity: 0 }}
              className="card bg-base-100 shadow-xl mt-2 pt-2"
            >
              <figure>
                <img src={image} alt="Shoes" className="w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p>{description}</p>

                <p className="text-gray-400">- 25 Juillet 2021 -</p>
              </div>
              <div className="action bg-gray-100 p-3 flex items-center gap-2">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src="https://source.unsplash.com/random/?portrait,avatar" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-400">Titre</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
