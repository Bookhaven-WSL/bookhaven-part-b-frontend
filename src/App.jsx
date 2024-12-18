import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import AuthProvider from "./contexts/authProvider";
import Routes from './routes/index.jsx'



function App() {

  return (
    <>
      
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginSignupPage />}/>
        <Route path="/read" element={<ReadPage />}/>
      </Routes>
        
    </BrowserRouter>
    
  </>
  )
}

export default App;
