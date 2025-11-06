'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import HorseRace from '@/components/HorseRace'
import { fetchSheetData } from '@/lib/googleSheets'

export interface Developer {
  name: string
  points: number
  photo: string
}

export default function Home() {
  const [developers, setDevelopers] = useState<Developer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const data = await fetchSheetData()
        setDevelopers(data)
        setError(null)
      } catch (err) {
        console.error('Error loading data:', err)
        setError('Error al cargar los datos. Por favor, verifica la configuración.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
    // Actualizar cada 30 segundos
    const interval = setInterval(loadData, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent shadow-[0_0_20px_rgba(201,52,72,0.5)]"></div>
            <p className="mt-6 text-white text-xl font-bold">Cargando datos...</p>
          </div>
        ) : error ? (
          <div className="text-center max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border-2 border-primary shadow-2xl shadow-primary/30">
            <div className="text-primary text-7xl mb-4 animate-pulse">⚠️</div>
            <h2 className="text-3xl font-bold text-white mb-3">Error</h2>
            <p className="text-gray-400 text-lg">{error}</p>
          </div>
        ) : (
          <HorseRace developers={developers} />
        )}
      </div>
    </main>
  )
}
