import React from 'react'

interface MobileContainerProps {
  children: React.ReactNode
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex justify-center items-start sm:items-center p-0 sm:p-4">
      {/* Mobile-style Frame */}
      <div className="w-full max-w-[430px] h-screen sm:h-[844px] bg-white relative overflow-hidden shadow-2xl sm:rounded-[3rem] border-x border-dark/5 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-center border-b border-dark/5 px-6 shrink-0 bg-white z-50">
          <h1 className="text-2xl font-black tracking-tighter uppercase font-heading text-primary italic">
            OODEE
          </h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto relative bg-white">
          {children}
        </main>
      </div>
    </div>
  )
}
