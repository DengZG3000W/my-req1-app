import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RequirementApp from './App.jsx'  // 修改这里

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RequirementApp />
  </StrictMode>,
)