import React, { createContext, useState } from 'react';

export const SpellContext = createContext();

export const SpellProvider = ({ children }) => {
  const [spells, setSpells] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);

  return (
    <SpellContext.Provider value={{ spells, setSpells, selectedSpell, setSelectedSpell }}>
      {children}
    </SpellContext.Provider>
  );
};