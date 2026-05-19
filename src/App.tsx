import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MobileContainer } from './layouts/MobileContainer'
import { SwipeDeck } from './features/swiper/SwipeDeck'
import { MyCloset } from './features/closet/MyCloset'
import { BottomNav } from './components/BottomNav'

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'closet'>('home')

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-white relative">
        {/* Main Content Area with Transitions */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full flex flex-col items-center justify-center"
              >
                <SwipeDeck />
                <footer className="mt-8 mb-4 text-center px-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/30">
                    Swipe right to save to your closet
                  </p>
                </footer>
              </motion.div>
            ) : (
              <motion.div
                key="closet"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full"
              >
                <MyCloset />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </MobileContainer>
  )
}

export default App
