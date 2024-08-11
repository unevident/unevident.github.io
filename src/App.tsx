import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home'
import { Brickbreaker } from './pages/Brickbreaker'
import { Layout } from './Components/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} /> //default path when app is launched
          <Route path='/Brickbreaker' element={<Brickbreaker/>} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App
