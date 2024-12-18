import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import AuthProvider from "./contexts/authProvider";
import Routes from './routes/index.jsx'



function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
