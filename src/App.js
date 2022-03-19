import {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
  ])

  return (
    <>
      <NavBar navItems={navItems}/>
    </>
  );
}

export default App;