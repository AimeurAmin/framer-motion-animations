import React, { useState } from 'react'
import { motion } from 'framer-motion';

function Box1() {

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div className="box"
        animate={{
          x: isAnimating? 1000 : 0,
          opacity: isAnimating? 1 : .5,
          rotate: isAnimating? 360 : 0
        }}
        initial={{
          opacity: .1
        }}
        transition={{
          type: "spring", // with spring type you use stifness instead of duration
          stiffness: 60
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  )
}

export default Box1
