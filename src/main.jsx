import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './Redux/store'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    {/* here we are rendering App component and componenet 1st letter must be in capital case to identify it differently from html tag. */}
  </StrictMode>,
)
