import useSpells from '../hook/useSpells';

const SpellDetails = () => {
  const { selectedSpell } = useSpells();

  if (!selectedSpell) return null;

  return (
    <div className="spell-details show">
      {selectedSpell.desc.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
};

export default SpellDetails;