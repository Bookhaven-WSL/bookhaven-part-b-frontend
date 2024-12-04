import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ReadPage } from './pages/Read'
import { ToBeReadPage } from './pages/ToBeReadPage'
import { Search } from './pages/Search'
import { Recommendations } from './pages/Recommendations'
import { Navbar } from './components/Navbar'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadPage />} />
          <Route path="/tbr" element={<ToBeReadPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
