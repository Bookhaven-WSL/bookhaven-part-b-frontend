import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header.jsx"
import Navbar from './components/Navbar.jsx';
import AuthProvider from "./contexts/authProvider";
import Routes from './routes/index.jsx'



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
    </BrowserRouter>
    // // <AuthProvider>
    //   <BrowserRouter>
    //     <Header />
    //     <Navbar />
    //     {/* <Routes /> */}
    //   </BrowserRouter>
    // {/* </AuthProvider> */}

  )
}

export default App;
