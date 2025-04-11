import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Login  from './pages/Login.jsx'
import Header from './components/Header.jsx';
import './App.css'

export default function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}
