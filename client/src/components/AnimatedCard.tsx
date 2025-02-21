import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
}

export default function AnimatedCard({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        delay: delay * 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
} 