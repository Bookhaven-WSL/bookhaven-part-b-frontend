import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ReadPage from './pages/Read'
import ToBeReadPage from './pages/ToBeReadPage'
import Search from './pages/Search'
import Recommendations from './pages/Recommendations'
import Navbar from './components/Navbar'
import Header from './components/Header'
import LoginSignupPage from './pages/LoginSignupPage'


function App() {

  return (
    <>
      <LoginSignupPage />
    </>
  )
}

export default App;
