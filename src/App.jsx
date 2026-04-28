
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  return (
    <>
    <div className="main-container">
    <Header />
    <About />
    <Contact />
    <Footer /> 
    </div>         
    </>
  )
}

export default App
