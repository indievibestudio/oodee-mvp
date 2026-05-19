import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Camera, Image as ImageIcon } from 'lucide-react'

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm z-[60]"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] z-[70] px-8 pb-12 pt-6 shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1)]"
          >
            {/* Handle Bar */}
            <div className="w-12 h-1.5 bg-dark/10 rounded-full mx-auto mb-8" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-8 p-2 rounded-full bg-dark/5 text-dark/40 hover:text-dark transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-dark mb-2">
                Complete this Look!
              </h2>
              <p className="text-sm font-medium text-dark/50 leading-relaxed px-4">
                Upload a similar item from your closet or any shop.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full h-16 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl flex items-center justify-center gap-3 text-white font-black uppercase tracking-tight shadow-lg active:scale-[0.98] transition-transform">
                <Camera size={24} />
                <span>Snap a photo</span>
              </button>
              
              <button className="w-full h-16 bg-light border-2 border-dark/5 rounded-2xl flex items-center justify-center gap-3 text-dark font-black uppercase tracking-tight active:scale-[0.98] transition-transform">
                <ImageIcon size={24} className="text-primary" />
                <span>Upload screenshot</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
