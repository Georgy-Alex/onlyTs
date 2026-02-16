import App from "app/App";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

export const ANIMATION_DURATION = 2;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
