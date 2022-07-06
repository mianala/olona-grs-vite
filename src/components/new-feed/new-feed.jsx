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
          exit={{ opacity: 0 }}
          className="card bg-base-100 shadow-xl mt-2 pt-2"
        >
          <figure>
            <img src={image} alt="Shoes" className="w-20 h-20" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title.substring(0, 10)}</h2>
            <p>{description.substring(0, 30)}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
