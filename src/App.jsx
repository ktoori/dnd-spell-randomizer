import { useState } from 'react'
import './index.css';
import H1 from './components/H1';
import H2 from './components/H2';
import SpellList from './components/SpellList';
import SpellDetails from './components/SpellDetails';
import { SpellProvider } from './context/SpellContext';

function App() {
  return (
    <SpellProvider>
      <div className="container">
        <H1/>
        <H2/>
        <SpellList />
        <SpellDetails />
      </div>
    </SpellProvider>
  );
}

export default App
