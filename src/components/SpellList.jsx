import React, { useState } from 'react';
import useSpells from '../hook/useSpells';
import SpellCard from './SpellCard';

const SpellList = () => {
  const { spells, setSelectedSpell } = useSpells();
  const [randomSpells, setRandomSpells] = useState([]);

  const getRandomSpells = (list, count) => {
    const shuffled = list.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const SetSpells = async () => {
    if (spells.length === 0) return;
    const selected = getRandomSpells(spells, 5);
    setRandomSpells(selected);
  };

  return (
    <>
      <button onClick={SetSpells}>Найти заклинания</button>
      <div className="spell-cards">
        {randomSpells.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </div>
    </>
  );
};

export default SpellList;