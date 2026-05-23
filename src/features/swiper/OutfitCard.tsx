import React from 'react'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'

export interface Outfit {
  id: number
  imageUrl: string
  styleName: string
  description: string
}

interface OutfitCardProps {
  outfit: Outfit
  onSwipe: (direction: 'left' | 'right') => void
  onClick?: () => void
}

export const OutfitCard: React.FC<OutfitCardProps> = ({ outfit, onSwipe, onClick }) => {
  const x = useMotionValue(0)
  
  // Drag transformations: rotation and opacity for stamps
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  
  // Stamp opacity logic
  const likeOpacity = useTransform(x, [50, 150], [0, 1])
  const passOpacity = useTransform(x, [-50, -150], [0, 1])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe('right')
    } else if (info.offset.x < -100) {
      onSwipe('left')
    }
  }

  return (
    <motion.div
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      onTap={() => onClick?.()}
      whileTap={{ scale: 1.05 }}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-dark/5 bg-white">
        {/* Outfit Image */}
        <img
          src={outfit.imageUrl}
          alt={outfit.styleName}
          className="w-full h-full object-cover"
        />

        {/* LIKE Stamp */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-10 left-10 border-4 border-green-500 rounded-lg px-4 py-2 rotate-[-20deg] z-20 pointer-events-none"
        >
          <span className="text-4xl font-black text-green-500 uppercase tracking-widest">LIKE</span>
        </motion.div>

        {/* PASS Stamp */}
        <motion.div
          style={{ opacity: passOpacity }}
          className="absolute top-10 right-10 border-4 border-red-500 rounded-lg px-4 py-2 rotate-[20deg] z-20 pointer-events-none"
        >
          <span className="text-4xl font-black text-red-500 uppercase tracking-widest">PASS</span>
        </motion.div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">
            {outfit.styleName}
          </h3>
          <p className="text-white/80 text-sm font-medium leading-relaxed">
            {outfit.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
