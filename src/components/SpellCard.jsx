import useSpells from '../hook/useSpells';

const SpellCard = ({ spell }) => {
  const { setSelectedSpell } = useSpells();

  const handleDetails = async () => {
    const res = await fetch(`https://www.dnd5eapi.co/api/spells/${spell.index}`);
    const data = await res.json();
    setSelectedSpell(data);
  };

  return (
    <div className="card">
      <h3>{spell.name}</h3>
      <button onClick={handleDetails}>Подробнее</button>
    </div>
  );
};

export default SpellCard;