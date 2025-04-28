
import About from './components/About';
import Editor from './components/Editor';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
    <nav className='fixed w-full top-0 left-0'><Navbar/></nav>
      <div className={`flex flex-col h-screen`}>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/write" element={<Editor/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
