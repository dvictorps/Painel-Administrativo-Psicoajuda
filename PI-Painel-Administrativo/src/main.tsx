import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'
import { GlobalStyles } from './styles/globalCss'
import { darkTheme } from './config/useTheme'
import { ThemeProvider } from '@mui/material'
import 'chart.js/auto';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
