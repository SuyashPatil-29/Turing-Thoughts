import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
  <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path='/about' element={<About />} />
  </Routes>
  )
}

export default App
