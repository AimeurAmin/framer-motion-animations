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
        delay: .5,
        when: "beforeChildren", // tells parent to finish animating before children start animating
        staggerChildren: .2 // time for each child to finish animate
      }
    }
  }

  const listVariant = {
    hidden: {
     opacity: 0
    },
    visible: {
      opacity: 1,
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
          <motion.li key={box} className="boxItem"
            variants={listVariant}
            // no need to add initial="hidden" and animate="visible" cause the children of a motion tag always inherit those from the parent
          ></motion.li>
        ))}
      </motion.div>
    </div>
  )
}

export default Box3
