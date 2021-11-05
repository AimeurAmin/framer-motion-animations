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
        drag="x"
      ></motion.div>
    </div>
  )
}

export default Box2
