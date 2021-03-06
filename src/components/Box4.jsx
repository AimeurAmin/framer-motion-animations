import React from 'react'
import { motion } from 'framer-motion';

function Box4() {
  return (
    <div className="box-container">
      <motion.div className="box"
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 270, 270, 0]
        }}
        transition={{
          duration: 2
        }}
      ></motion.div>
    </div>
  )
}

export default Box4
