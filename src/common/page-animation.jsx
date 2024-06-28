import React from 'react'
import {AnimatePresence, motion} from "framer-motion"

function AnimationWrapper({children, keyValue, initial = {opacity : 0}, animate = {opacity : 1}, transition = {duration : 1}}) {
  return (
    <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
    >
        {children}
    </motion.div>
  )
}

export default AnimationWrapper