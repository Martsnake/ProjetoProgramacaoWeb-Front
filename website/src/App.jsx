import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EventPage from './pages/EventPage.jsx';
import  Login  from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PasswordRecoverryPage  from './pages/PasswordRecoverryPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import EventDetail from './pages/EventDetailPage.jsx';
import './App.css'

export default function App() {


  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={< Login/>} />
        
        <Route path="/register" element={< Register/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/password" element={<PasswordRecoverryPage />} />
        <Route path='/event' element={<EventPage/>}/>
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  )
}