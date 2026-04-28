
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  return (
    <>
    <BrowserRouter>
     <Header />
    <Routes>
       <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer />   
     </BrowserRouter>         
    </>
  )
}

export default App
