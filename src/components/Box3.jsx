import React from 'react'
import { motion } from 'framer-motion';

function Box3() {
  return (
    <div className="box-container">
      <motion.div className="box">
        {[1,2,3].map(box => (
          <li key={box} className="boxItem"></li>
        ))}
      </motion.div>
    </div>
  )
}

export default Box3
