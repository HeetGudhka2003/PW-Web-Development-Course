import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { SeriesCard } from './SeriesCard.jsx'

// import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <SeriesCard />

  </StrictMode>,
)