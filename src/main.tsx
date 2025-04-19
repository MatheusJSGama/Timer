import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import { defaultTheme } from './styles/themes/default.ts'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
)
