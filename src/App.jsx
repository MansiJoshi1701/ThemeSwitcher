import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import ThemeContext from './context/ThemeContext'

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(curTheme => (curTheme == 'light' ? 'dark' : 'light'))
  }

  return (

    <ThemeContext.Provider value={{theme , toggleTheme}}>

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/blog' element={ <Blog/> }/>
        </Routes>

      </BrowserRouter>

    </ThemeContext.Provider>
  )
}

export default App
