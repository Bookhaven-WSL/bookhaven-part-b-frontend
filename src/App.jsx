import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header.jsx"
import Navbar from './components/Navbar.jsx';
import ReadPage from './pages/Read.jsx';
import AuthProvider from "./contexts/authProvider";
// import Routes from './routes/index.jsx'
import LoginSignupPage from './pages/LoginSignupPage.jsx';
import ToBeReadPage from './pages/ToBeReadPage.jsx';
import Recommendations from './pages/Recommendations.jsx';
import Search from './pages/Search.jsx';



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
        <AuthProvider>
          <Routes>
            <Route path="/" element = {<LoginSignupPage />} />
            <Route path="/read" element = {<ReadPage />}/>  
            <Route path="/tbr" element = {<ToBeReadPage />} />
            <Route path="/recommendations" element = {<Recommendations />} />
            <Route path="/search" element = {<Search />} />
          </Routes>
        </AuthProvider>
    </BrowserRouter>
   
  )
}

export default App;
 