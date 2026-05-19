import React from 'react'
import { motion } from 'framer-motion'

interface ClosetItem {
  id: number
  name: string
  imageUrl: string
}

const CLOSET_DATA: ClosetItem[] = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Classic White Tee",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Beige Cargo Pants",
    imageUrl: "https://images.unsplash.com/photo-1624372990435-08126027376c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Neon Cyber Hoodie",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Retro Sneakers",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    name: "Bucket Hat",
    imageUrl: "https://images.unsplash.com/photo-1576872481759-c2763b361a6c?w=800&auto=format&fit=crop&q=60"
  }
]

export const MyCloset = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 pb-24"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-dark">
          My Closet
        </h2>
        <p className="text-sm font-medium text-dark/40 uppercase tracking-widest mt-1">
          {CLOSET_DATA.length} Items Registered
        </p>
      </header>

      {/* Masonry-style Grid using Tailwind Columns */}
      <div className="columns-2 gap-4 space-y-4">
        {CLOSET_DATA.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid relative group"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-dark/5 bg-light shadow-sm">
              <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">
                  {item.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
