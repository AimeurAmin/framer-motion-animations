import React from 'react'
import { motion } from 'framer-motion';

function Box5() {
  return (
    <div className="box-container">
      <button>Move Right</button>
      <button>Move Left</button>
      <button>Circle</button>
      <button>Square</button>
      <button>Stop</button>
      <motion.div className="box"></motion.div>
    </div>
  )
}

export default Box5
