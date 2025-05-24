import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
      {/* here we are rendering App component and componenet 1st letter must be in capital case to identify it differently from html tag. */}
    </StrictMode>,
  </Provider>
)
