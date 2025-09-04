import { useState , useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import {ThemeContextProvider} from './context/ThemeContext'

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(curTheme => (curTheme == 'light' ? 'dark' : 'light'))
  }

  //actual change in theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (

    <ThemeContextProvider value={{theme , toggleTheme}}>

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/blog' element={ <Blog/> }/>
        </Routes>

      </BrowserRouter>

    </ThemeContextProvider>
  )
}

export default App
