import React from 'react'
import { Home, Shirt } from 'lucide-react'
import { motion } from 'framer-motion'

interface BottomNavProps {
  activeTab: 'home' | 'closet'
  setActiveTab: (tab: 'home' | 'closet') => void
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-t border-dark/5 flex items-center justify-around px-12 z-50">
      <button 
        onClick={() => setActiveTab('home')}
        className="relative p-2 flex flex-col items-center gap-1 group"
      >
        <Home 
          size={24} 
          className={activeTab === 'home' ? 'text-primary' : 'text-dark/20 group-hover:text-dark/40 transition-colors'} 
          strokeWidth={activeTab === 'home' ? 3 : 2}
        />
        <span className={`text-[10px] font-black uppercase tracking-tighter ${activeTab === 'home' ? 'text-primary' : 'text-dark/20'}`}>
          Home
        </span>
        {activeTab === 'home' && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute -top-2 w-1 h-1 bg-primary rounded-full"
          />
        )}
      </button>

      <button 
        onClick={() => setActiveTab('closet')}
        className="relative p-2 flex flex-col items-center gap-1 group"
      >
        <Shirt 
          size={24} 
          className={activeTab === 'closet' ? 'text-primary' : 'text-dark/20 group-hover:text-dark/40 transition-colors'} 
          strokeWidth={activeTab === 'closet' ? 3 : 2}
        />
        <span className={`text-[10px] font-black uppercase tracking-tighter ${activeTab === 'closet' ? 'text-primary' : 'text-dark/20'}`}>
          Closet
        </span>
        {activeTab === 'closet' && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute -top-2 w-1 h-1 bg-primary rounded-full"
          />
        )}
      </button>
    </nav>
  )
}
