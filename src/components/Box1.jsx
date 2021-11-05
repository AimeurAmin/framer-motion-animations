import React from 'react'
import { motion } from 'framer-motion';

function Box1() {
  return (
    <div className="box-container">
      <motion.div className="box"
        animate={{
          x: 1000,
          opacity: 1,
          rotate: 360
        }}
        initial={{
          opacity: .1
        }}
        transition={{
          type: "spring", // with spring type you use stifness instead of duration
          stiffness: 60
        }}
      ></motion.div>
    </div>
  )
}

export default Box1
