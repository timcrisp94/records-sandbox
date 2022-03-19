import {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Records from './pages/Records/Records';
import Record from '.pages/Record/Record'

function App() {
  const [navItems, setNavItems] = useState([
    {url: '/records', name: 'Records'}
  ])

  return (
    <>
      <NavBar navItems={navItems}/>
      <Routes>
        <Route path="/records"
        element={<Records />}/>
        <Route path="/record"
        element={<Record />}/>
      </Routes>
    </>
  );
}

export default App;