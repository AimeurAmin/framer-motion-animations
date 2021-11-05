import React from 'react'
import { motion } from 'framer-motion';

function Box1() {
  return (
    <div className="box-container">
      <motion.div className="box"
        animate={{
          x: 1000
        }}
      ></motion.div>
    </div>
  )
}

export default Box1
