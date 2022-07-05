import React from "react";
import classes from "./feedlayout.module.sass";
import MainSideNav from "../side-nav/main-sidenav";
import MainTopNav from "../top-bar/main-top";
import { motion } from "framer-motion";

export default function Newfeed() {
  return (
    <div className={classes.container}>
      <div className={classes.sidenav}>
        <MainSideNav />
      </div>
      <div className={classes.top_outlet}>
        <div>
          <MainTopNav />
        </div>
        <main className="masonry sm:masonry-sm md:masonry-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/200/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/300/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/150/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/500/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/200/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/300/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/150/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.61, 1, 0.88, 1],
              },
            }}
            exit={{ opacity: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src="https://placeimg.com/300/500/tech" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
