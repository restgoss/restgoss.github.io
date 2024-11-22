import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import vlodmerwithceos from '../../utils/vlodmerwithceos.png';
import bullishvlodmer from '../../utils/bullishvlodmer.png';
import chillvlodmer from '../../utils/chillvlodmer.png';
import yogavlodmer from '../../utils/yogavlodmer.png';
import eldervlodmer from '../../utils/eldervlodmer.png';
import './Gallery.css';


const images = [
  { src: vlodmerwithceos, description: "Negotiations went smoothly—showed them my plan, and they knew I meant business.  Let’s make history, boys. 🚀" },
  { src: bullishvlodmer, description: "Vlodmer’s taming the wild beast 🐂, and while he holds on, we’ve updated the DEX for a smoother ride" },
  { src: chillvlodmer, description: "Relax, wanderer. You've reached the checkpoint. This is a RUG-FREE zone—sit back, hold tight, and enjoy the ride" },
  { src: yogavlodmer, description: "Even in the deepest valleys, Vlodmer meditates on the moon 🧘‍♂️ 🌄" },
  { src: eldervlodmer, description: "«FOMO, hmmm. Powerful it is, yes. Fear of missing out, it drives them. Buy they must, or regret forever they will. To the moon, take us it shall" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImageGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div
        className="gallery-container"
      >
        <button
          onClick={() => paginate(-1)}
          className="arrow-block"
          style={{ left: '5px', top: '5px' }}
        >
          &lt;
        </button>
        <AnimatePresence initial={false} custom={direction}>

          <motion.img
            key={page}
            src={images[imageIndex].src}
            alt={images[imageIndex].description}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            style={{
              position: "absolute",
              top: 0,
              left: "0px",
              transform: "translateX(-50%)",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </AnimatePresence>
        <button
          onClick={() => paginate(1)}
          className="arrow-block"
          style={{ right: '5px', top: '5px' }}
        >
          &gt;
        </button>
      </div>
      <div className="gallery__description">
        <p>{images[imageIndex].description}</p>
      </div>
    </>
  );
};

export default ImageGallery