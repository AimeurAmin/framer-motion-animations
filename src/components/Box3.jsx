import React from 'react'
import { motion } from 'framer-motion';

function Box3() {

  const boxVariants = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: .5
      }
    }
  }

  return (
    <div className="box-container">
      <motion.div className="box"
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        {[1,2,3].map(box => (
          <li key={box} className="boxItem"></li>
        ))}
      </motion.div>
    </div>
  )
}

export default Box3
