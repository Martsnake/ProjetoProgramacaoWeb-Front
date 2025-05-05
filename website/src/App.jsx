import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Login  from './pages/Login.jsx';
import PasswordRecoverryPage  from './pages/PasswordRecoverryPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css'

export default function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PasswordRecoverryPage />} />
        <Route path="/password" element={< Login/>} />
        <Route path="/landing" element={<HomePage/>}/>
        <Route path="/home" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}
