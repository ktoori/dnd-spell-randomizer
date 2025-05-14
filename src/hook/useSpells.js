import { useEffect, useContext } from 'react';
import { SpellContext } from '../context/SpellContext';

const useSpells = () => {
  const { spells, setSpells, selectedSpell, setSelectedSpell } = useContext(SpellContext);

  useEffect(() => {
    const fetchAllSpells = async () => {
      try {
        const res = await fetch('https://www.dnd5eapi.co/api/spells/');
        const data = await res.json();
        setSpells(data.results);
      } catch (error) {
        console.error('Ошибка при загрузке полного списка заклинаний:', error);
      }
    };

    fetchAllSpells();

  }, [setSpells]);

  return { spells, selectedSpell, setSelectedSpell };
};

export default useSpells;