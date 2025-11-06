# History Points Race App

Aplicacion web desarrollada en Next.js para visualizar de forma divertida la acumulacion de history points de los desarrolladores mes a mes mediante una carrera de caballos.

## Caracteristicas

- **Carrera de caballos animada**: Cada desarrollador esta representado por un "caballo" con su foto
- **Datos en tiempo real**: Integracion con Google Sheets para obtener los puntos actualizados
- **Diseno responsive**: Optimizado para mobile, tablet y desktop
- **Boton de refrescar**: Actualiza los datos manualmente desde el navbar
- **Diseno oscuro premium**: Interfaz moderna con fondo negro, efectos de glow y animaciones fluidas
- **Color primary destacado**: Uso intensivo del color #c93448 en bordes, textos y efectos visuales
- **Animaciones avanzadas**: Efectos con Framer Motion, transiciones suaves y elementos interactivos

## Colores de la Marca

- **Primary**: `#c93448` (Rojo/Rosa Wineobs) - Usado intensivamente en toda la UI
- **Secondary**: `#2d3748` (Gris oscuro)
- **Tertiary**: `#faf9f6` (Blanco hueso) - Navbar
- **Dark BG**: `#0a0a0a` (Fondo negro)
- **Card BG**: `#1a1a1a` (Fondo de tarjetas)

## Estructura del Proyecto

```
history-points-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales con tema oscuro
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Pagina principal
│   ├── components/
│   │   ├── Header.tsx           # Header con logo y "Powered by Wineobs"
│   │   └── HorseRace.tsx        # Componente de carrera con animaciones
│   └── lib/
│       └── googleSheets.ts      # Integracion con Google Sheets API
├── public/
│   └── images/
│       ├── wineobs-logo.svg (agregar logo aqui)
│       └── devs/
│           ├── gaston.png (agregar foto)
│           ├── marcos.png (agregar foto)
│           └── benji.png (agregar foto)
└── package.json
```

## Instalacion

1. **Instalar dependencias**:
```bash
npm install
```

2. **Configurar variables de entorno**:

Crea un archivo `.env.local` en la raiz del proyecto:

```env
NEXT_PUBLIC_GOOGLE_SHEET_ID=tu_sheet_id_aqui
NEXT_PUBLIC_GOOGLE_API_KEY=tu_api_key_aqui
```

Para instrucciones detalladas de como obtener estos valores, consulta [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)

3. **Agregar imagenes**:

- Coloca el logo de Wineobs en: `public/images/wineobs-logo.svg`
- Coloca las fotos de los devs (formato 1:1, PNG) en: `public/images/devs/`
  - `gaston.png`
  - `marcos.png`
  - `benji.png`

4. **Ejecutar en desarrollo**:
```bash
npm run dev
```

La aplicacion estara disponible en [http://localhost:3000](http://localhost:3000)

## Configuracion de Google Sheets

### Estructura Requerida

Tu hoja de calculo debe tener esta estructura:

```
    A       B       C       D
1   Gaston  Marcos  Benji   Mes
2   10      20      30      Noviembre
```

Los valores en **A2, B2, C2 y D2** son los que la aplicacion leera:
- **A2, B2, C2**: Puntos de cada desarrollador (Gaston, Marcos, Benji)
- **D2**: Nombre del mes actual

### Guia Completa

Para instrucciones paso a paso sobre como:
- Obtener el Sheet ID
- Configurar Google Sheets API
- Crear y configurar API Key
- Hacer publico el Sheet

Consulta la guia completa: **[GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)**

## Debugging de Google Sheets

La aplicacion incluye logs detallados en la consola del navegador (F12):

- ✅ `Data received` - Datos cargados correctamente
- ⚠️ `Google Sheets no configurado` - Falta configurar .env.local
- ❌ `Error response` - Problema con permisos o API

## Modo de prueba (sin Google Sheets)

Si no configuras las variables de entorno, la aplicacion funcionara con datos de ejemplo:
- Gaston: 10 points
- Marcos: 20 points
- Benji: 30 points

Esto es util para probar la app sin configurar Google Sheets.

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para produccion
npm run build

# Ejecutar en produccion
npm start

# Linting
npm run lint
```

## Tecnologias Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estatico
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas y profesionales
- **Google Sheets API** - Fuente de datos en tiempo real

## Responsive Design

La aplicacion esta optimizada para:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos los elementos se adaptan automaticamente, incluyendo:
- Tamanos de fuente
- Espaciados
- Layouts de grids
- Tamanos de imagenes

## Caracteristicas Tecnicas del Diseno

### Efectos Visuales

- **Glow effects**: Sombras con color primary (#c93448) en elementos destacados
- **Gradientes**: Transiciones suaves entre colores oscuros
- **Animaciones**: Entrada escalonada de elementos, rotaciones suaves
- **Hover states**: Efectos interactivos en todas las tarjetas
- **Pulse animations**: El lider tiene efectos de pulso en su foto

### Barras de Progreso

- **Track realista**: Lineas que simulan una pista de carreras
- **Animacion fluida**: 2 segundos de duracion con ease-out
- **Indicador de porcentaje**: Badge con fondo oscuro y borde primary
- **Caballo animado**: Emoji que "salta" continuamente
- **Linea de meta**: Marcador con bandera de cuadros

### Tarjetas de Estadisticas

- **Medallas**: Emoji de medalla para top 3 posiciones
- **Hover effect**: Escala y elevacion al pasar el mouse
- **Borde dinamico**: Color primary para el lider
- **Glow effect**: Resplandor alrededor del lider

## Personalizacion

### Cambiar los desarrolladores

Edita el archivo `src/lib/googleSheets.ts`:

```typescript
const DEV_CONFIG: { [key: string]: string } = {
  'NuevoNombre': '/images/devs/nuevo.png',
  // ... agregar mas desarrolladores
}
```

### Cambiar colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: '#c93448',    // Cambia aqui
  secondary: '#2d3748',  // Cambia aqui
  tertiary: '#faf9f6',   // Cambia aqui
  'dark-bg': '#0a0a0a',
  'card-bg': '#1a1a1a',
}
```

## Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel:
   - `NEXT_PUBLIC_GOOGLE_SHEET_ID`
   - `NEXT_PUBLIC_GOOGLE_API_KEY`
3. Deploy automatico

### Otras plataformas

La aplicacion es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Solucion de Problemas

### Las imagenes no cargan

Verifica que:
- Las imagenes esten en `public/images/`
- Los nombres de archivo coincidan exactamente (minusculas, extension correcta)
- Las imagenes tengan el formato correcto (PNG/SVG)

### No se cargan datos de Google Sheets

Verifica en la consola del navegador (F12):
1. Si ves "Google Sheets no configurado" → Revisa `.env.local`
2. Si ves error 403/401 → El Sheet no es publico
3. Si ves error 400 → La API Key es invalida

Consulta [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) para mas detalles.

### Errores de build

```bash
# Limpia cache y reinstala
rm -rf .next node_modules
npm install
npm run build
```

### Las animaciones van lentas

- Verifica que tu navegador este actualizado
- Cierra otras pestanas/aplicaciones que consuman recursos
- Las animaciones se optimizan automaticamente en dispositivos de baja potencia

## Archivos Importantes

- [SETUP.md](SETUP.md) - Guia rapida de inicio
- [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) - Configuracion detallada de Google Sheets
- [.env.example](.env.example) - Template de variables de entorno

## Licencia

Propiedad de Wineobs

## Soporte

Para consultas o problemas, contacta al equipo de desarrollo de Wineobs.
