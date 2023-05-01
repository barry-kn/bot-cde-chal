function EachBot({ bot, onClick }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at } = bot;

  function handleRemoveClick() {
    onClick(id);
  }

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={`${name} avatar`} />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      
      
      <p>Catchphrase: {catchphrase}</p>
      
      
      <button onClick={handleRemoveClick}>REMOVE</button>
    </div>
  );
}

export default EachBot;