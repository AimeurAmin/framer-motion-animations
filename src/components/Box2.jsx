import React from 'react'
import { motion } from 'framer-motion';

function Box2() {
  return (
    <div className="box-container">
      <motion.div className="box"
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        drag
        dragConstraints={{
          left: -20,
          right: 400,
          top: -100,
          bottom: 300
        }}
      ></motion.div>
    </div>
  )
}

export default Box2
