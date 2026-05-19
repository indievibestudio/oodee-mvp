import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { OutfitCard, type Outfit } from './OutfitCard'
import { UploadModal } from './UploadModal'

const MOCK_DATA: Outfit[] = [
  {
    id: 1,
    styleName: "Urban Techwear",
    description: "Futuristic street style with utility vests and cargo pants.",
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    styleName: "90s Retro Vibe",
    description: "Vibrant oversized flannels paired with classic high-waist denim.",
    imageUrl: "https://images.unsplash.com/photo-1529139513402-f20a5959577a?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    styleName: "Minimalist Chic",
    description: "Clean silhouettes and neutral tones for a sophisticated everyday look.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60"
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
