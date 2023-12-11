import { motion } from "framer-motion"

const animations = {
  initial:{opacity:0, y:100},
  animate:{opacity: 1, y:0, transition:{delay: 0.2, ease: "linear"}},
  exit: {opacity: 0, y:-100},
}

const AnimatedPage = ({ children }) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default AnimatedPage