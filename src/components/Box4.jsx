import React from 'react'
import { motion } from 'framer-motion';

function Box4() {
  return (
    <div className="box-container">
      <motion.div className="box"
        animate={{
          scale: [1, .2, .5, .6, .7, .8, .9, 1]
        }}
        transition={{
          duration: 2
        }}
      ></motion.div>
    </div>
  )
}

export default Box4
