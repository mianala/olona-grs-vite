import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Newfeed() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const productsReq = await fetch("https://fakestoreapi.com/products");
      const response = await productsReq.json();
      setProduct(response);
    };
    getProduct();
  }, []);
  return (
    <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg xl:masonry-xl my-2 mx-4">
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
          whileHover={{ scale: 1.02 }}
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
  );
}
