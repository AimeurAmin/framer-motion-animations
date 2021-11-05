import React from 'react'
import { motion, useAnimation } from 'framer-motion';

function Box5() {
  const control = useAnimation();
  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1000,
            transition: { duration: 1 }
          })
        }}
      >Move Right</button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 1 }
          })
        }}
      >Move Left</button>
      <button>Circle</button>
      <button>Square</button>
      <button>Stop</button>
      <motion.div className="box"
        animate={control}
      ></motion.div>
    </div>
  )
}

export default Box5
