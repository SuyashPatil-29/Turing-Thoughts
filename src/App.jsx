import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
  <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path='/about' element={<About />} />
    <Route path="/employee-login" element={<Login />} />
  </Routes>
  )
}

export default App
