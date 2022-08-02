import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FcCalendar } from "react-icons/fc"
import { FcNews } from "react-icons/fc"
import SocialList from "../../components/layout/social-list"

export default function Newfeed() {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    ;(async () => {
      const productsReq = await fetch("https://fakestoreapi.com/products")
      const response = await productsReq.json()
      setProduct(response)
    })()
  }, [])

  return (
    <div>
      <div className="w-full mb-2">
        <div className="flex justify-between px-5 items-center">
          <div className=" flex items-center my-3 gap-4">
            <FcNews className="w-9 h-9" />
            <span className="text-2xl font-bold">Fils d'actualités</span>
          </div>
          <div className="flex gap-2">
            <div className="btn btn-outline  flex items-center">
              <FcCalendar className="w-6 h-6 mr-4" />
              {new Date().toLocaleDateString("fr", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
      <SocialList />
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
            className="card bg-base-100 shadow-xl mt-2 pt-5 "
          >
            <figure>
              <img src={image} alt={title} className="w-20" />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title">{title}</h2>

              <p>{description}</p>

              <p className="text-gray-400">- 25 Juillet 2021 -</p>
            </div>
            <div class="flex p-4 justify-between">
              <div class="flex items-center space-x-2">
                <img
                  class="w-10 rounded-full"
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                  alt="sara"
                />
                <h2 class="text-gray-800 font-bold cursor-pointer">Felipe</h2>
              </div>
              <div class="flex space-x-2">
                <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 text-gray-600 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <span>22</span>
                </div>
                <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>20</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
