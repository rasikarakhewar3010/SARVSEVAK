import { Routes, Route } from 'react-router-dom'
import AuthPage from './components/Login/AuthPage'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound' // Optional for 404 page
import LanguageSelector from './components/LanguageSelector'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/language" element={<LanguageSelector />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App