import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Login  from './pages/Login.jsx'
import LandingPage from './pages/LandingPage.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css'

export default function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}
