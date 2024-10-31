import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'

function App() {


  return (
    <>
              <BrowserRouter>
            <Header/>
            <main>
            <Routes>
                <Route path="/" element={<Inicio/>} />
            </Routes>
            </main>
        </BrowserRouter>
    </>
  )
}

export default App
