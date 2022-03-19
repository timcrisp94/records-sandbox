import {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Records from './pages/Records/Records';

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
      </Routes>
    </>
  );
}

export default App;