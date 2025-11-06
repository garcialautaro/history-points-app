import { Developer, SheetData } from '@/app/page'

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

// Configuración de desarrolladores con sus fotos
const DEV_CONFIG: { [key: string]: string } = {
  'Gaston': '/images/devs/gaston.png',
  'Marcos': '/images/devs/marcos.png',
  'Benji': '/images/devs/benji.png',
}

export async function fetchSheetData(): Promise<SheetData> {
  // Si no hay configuración, usar datos de ejemplo
  if (!SHEET_ID || !API_KEY) {
    return {
      developers: [
        { name: 'Gaston', points: 10, photo: DEV_CONFIG['Gaston'] },
        { name: 'Marcos', points: 20, photo: DEV_CONFIG['Marcos'] },
        { name: 'Benji', points: 30, photo: DEV_CONFIG['Benji'] },
      ],
      month: 'Ejemplo'
    }
  }

  try {
    // Obtener datos de las celdas A2, B2, C2, D2
    const range = 'Sheet1!A2:D2'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`

    const response = await fetch(url, {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`)
    }

    const data = await response.json()
    const values = data.values?.[0] || []

    // Parsear los datos
    const developers: Developer[] = []

    // A2 = Gaston, B2 = Marcos, C2 = Benji, D2 = Mes
    const names = ['Gaston', 'Marcos', 'Benji']

    for (let i = 0; i < 3; i++) {
      const name = names[i]
      const points = parseInt(values[i] || '0', 10)

      developers.push({
        name,
        points,
        photo: DEV_CONFIG[name],
      })
    }

    const month = values[3] || 'Sin mes'

    return {
      developers,
      month
    }

  } catch (error) {
    console.error('Error fetching sheet data:', error)
    // En caso de error, devolver datos de ejemplo
    return {
      developers: [
        { name: 'Gaston', points: 10, photo: DEV_CONFIG['Gaston'] },
        { name: 'Marcos', points: 20, photo: DEV_CONFIG['Marcos'] },
        { name: 'Benji', points: 30, photo: DEV_CONFIG['Benji'] },
      ],
      month: 'Ejemplo'
    }
  }
}
