'use client'

import Image from 'next/image'
import { useState } from 'react'

interface HeaderProps {
  onRefresh: () => Promise<void>
}

export default function Header({ onRefresh }: HeaderProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await onRefresh()
    setIsRefreshing(false)
  }

  return (
    <header className="bg-secondary shadow-2xl border-b-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/images/wineobs-logo.svg"
                alt="Wineobs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                History Points Race
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">
                Powered by Wineobs
              </p>
            </div>
          </div>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`
              flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3
              bg-primary hover:bg-[#a52839]
              text-white font-bold rounded-lg
              transition-all duration-300
              border-2 border-primary hover:border-[#a52839]
              shadow-lg hover:shadow-[0_0_20px_rgba(201,52,72,0.5)]
              ${isRefreshing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
            `}
          >
            <span className={`text-xl ${isRefreshing ? 'animate-spin' : ''}`}>
              🔄
            </span>
            <span className="hidden sm:inline text-sm sm:text-base">
              {isRefreshing ? 'Actualizando...' : 'Refrescar'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
