import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { OutfitCard, type Outfit } from './OutfitCard'
import { UploadModal } from './UploadModal'

const MOCK_DATA: Outfit[] = [
  {
    id: 1,
    styleName: "90S RETRO VIBE",
    description: "Vibrant oversized flannels paired with classic high-waist denim.",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    styleName: "TECHWEAR UTILITY",
    description: "Future-proof cyberpunk aesthetics with functional cargo straps.",
    imageUrl: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    styleName: "MINIMALIST CHIC",
    description: "Clean silhouettes and monochrome tones for everyday elegance.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80"
  }
]

export const SwipeDeck = () => {
  const [outfits, setOutfits] = useState<Outfit[]>(MOCK_DATA)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Trigger the upload flow on LIKE
      setIsModalOpen(true)
    }
    
    // Remove the top card after a small delay to let animations finish if needed, 
    // or immediately as we do here.
    setOutfits((prev) => prev.slice(1))
  }

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center p-6">
      <AnimatePresence mode="popLayout">
        {outfits.length > 0 ? (
          <div className="relative w-full h-full max-w-[360px]">
            {outfits.map((outfit, index) => (
              index < 2 && (
                <OutfitCard
                  key={outfit.id}
                  outfit={outfit}
                  onSwipe={handleSwipe}
                />
              )
            ))}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-dark/40 font-black uppercase italic tracking-widest text-lg">
              End of style feed
            </p>
            <button
              onClick={() => setOutfits(MOCK_DATA)}
              className="px-8 py-3 bg-primary text-white font-black uppercase tracking-tighter rounded-full shadow-lg active:scale-95 transition-transform"
            >
              Refresh Looks
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* Upload Modal integration */}
      <UploadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}
