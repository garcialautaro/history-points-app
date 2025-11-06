'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Developer } from '@/app/page'

interface HorseRaceProps {
  developers: Developer[]
}

export default function HorseRace({ developers }: HorseRaceProps) {
  const [maxPoints, setMaxPoints] = useState(0)

  useEffect(() => {
    const max = Math.max(...developers.map(d => d.points))
    setMaxPoints(max || 100)
  }, [developers])

  const getProgressPercentage = (points: number) => {
    return maxPoints > 0 ? (points / maxPoints) * 100 : 0
  }

  const sortedDevelopers = [...developers].sort((a, b) => b.points - a.points)

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Título con efecto de gradiente */}
      <div className="text-center mb-10 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-4"
          style={{
            textShadow: '0 0 30px rgba(201, 52, 72, 0.5), 0 0 60px rgba(201, 52, 72, 0.3)',
          }}
        >
          Carrera de <span className="text-primary">History Points</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 font-medium"
        >
          Progreso mensual de los desarrolladores
        </motion.p>
      </div>

      {/* Pista de carreras */}
      <div className="space-y-6 sm:space-y-8">
        {sortedDevelopers.map((dev, index) => {
          const percentage = getProgressPercentage(dev.points)
          const isLeader = index === 0

          return (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Track container con efecto glow */}
              <div
                className={`
                  bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl p-4 sm:p-6
                  border-2 ${isLeader ? 'border-primary' : 'border-gray-800'}
                  ${isLeader ? 'shadow-[0_0_30px_rgba(201,52,72,0.3)]' : ''}
                  hover:border-primary transition-all duration-300
                `}
              >
                {/* Developer info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  {/* Position badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: index * 0.2 + 0.3 }}
                    className={`
                      flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                      font-black text-white text-base sm:text-lg shadow-lg
                      ${isLeader ? 'bg-gradient-to-br from-primary to-[#a52839]' : 'bg-gradient-to-br from-gray-700 to-gray-800'}
                    `}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Developer photo con glow */}
                  <div
                    className={`
                      relative w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0
                      ${isLeader ? 'animate-pulse' : ''}
                    `}
                  >
                    <Image
                      src={dev.photo}
                      alt={dev.name}
                      fill
                      className={`
                        rounded-full object-cover border-4
                        ${isLeader ? 'border-primary shadow-[0_0_20px_rgba(201,52,72,0.6)]' : 'border-gray-700'}
                      `}
                    />
                  </div>

                  {/* Name and points */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate">
                      {dev.name}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-primary">
                      {dev.points} <span className="text-gray-500 font-normal">points</span>
                    </p>
                  </div>

                  {/* Trophy for leader con animación */}
                  {isLeader && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                      }}
                      className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0"
                    >
                      🏆
                    </motion.div>
                  )}
                </div>

                {/* Progress bar track */}
                <div className="relative h-14 sm:h-20 bg-black/50 rounded-xl overflow-hidden border-2 border-gray-800">
                  {/* Líneas de fondo para efecto de pista */}
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 w-full border-l border-gray-800/50"
                        style={{ marginLeft: i === 0 ? '0' : '10%' }}
                      />
                    ))}
                  </div>

                  {/* Finish line */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary z-10 shadow-[0_0_10px_rgba(201,52,72,0.8)]">
                    <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl">
                      🏁
                    </div>
                  </div>

                  {/* Progress bar con gradiente */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                      duration: 2,
                      ease: 'easeOut',
                      delay: index * 0.2,
                    }}
                    className={`
                      relative h-full flex items-center justify-end pr-3
                      ${
                        isLeader
                          ? 'bg-gradient-to-r from-primary via-[#e84c5f] to-primary'
                          : 'bg-gradient-to-r from-gray-700 to-gray-600'
                      }
                    `}
                    style={{
                      boxShadow: isLeader ? '0 0 20px rgba(201, 52, 72, 0.5)' : 'none',
                    }}
                  >
                    {/* Horse emoji animado - mas grande y visible */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-5xl sm:text-6xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    >
                      🏇
                    </motion.div>
                  </motion.div>

                  {/* Percentage label mejorado */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-sm sm:text-lg font-black text-white bg-black/70 px-2 sm:px-3 py-1 rounded-lg border border-primary"
                  >
                    {percentage.toFixed(0)}%
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Stats summary con diseño mejorado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
      >
        {sortedDevelopers.map((dev, index) => {
          const isLeader = index === 0
          return (
            <motion.div
              key={dev.name}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`
                bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl p-5 sm:p-7
                border-2 ${isLeader ? 'border-primary' : 'border-gray-800'}
                text-center hover:border-primary transition-all duration-300
                ${isLeader ? 'shadow-[0_0_30px_rgba(201,52,72,0.3)]' : ''}
              `}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                <Image
                  src={dev.photo}
                  alt={dev.name}
                  fill
                  className={`
                    rounded-full object-cover border-4
                    ${isLeader ? 'border-primary shadow-[0_0_20px_rgba(201,52,72,0.6)]' : 'border-gray-700'}
                  `}
                />
              </div>

              <h4 className="font-black text-white text-lg sm:text-xl mb-2">
                {dev.name}
              </h4>

              <div className="flex flex-col items-center">
                <p className="text-4xl sm:text-5xl font-black text-primary mb-1">
                  {dev.points}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-bold">
                  History Points
                </p>
              </div>

              {isLeader && (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="mt-3 text-3xl sm:text-4xl"
                >
                  🏆
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
