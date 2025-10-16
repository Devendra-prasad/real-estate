
import React from 'react'
// import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

const AppContent = () => {
  const location = useLocation()
  const isSignupPage = location.pathname === '/signup' // ✅ check if signup route is active

  return (
    <div className='w-full overflow-hidden relative'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

      {/* ✅ Show LoginForm only when route is /signup */}
      {isSignupPage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <LoginForm />
        </div>
      )}
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  )
}

export default App
