import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './About.jsx'
import Nav from './Nav.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <About/>
  </StrictMode>,
)
