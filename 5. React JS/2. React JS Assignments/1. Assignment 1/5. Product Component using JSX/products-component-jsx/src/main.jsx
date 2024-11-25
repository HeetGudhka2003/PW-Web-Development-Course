import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import Products from './Products.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Products />
    
  </StrictMode>,
)