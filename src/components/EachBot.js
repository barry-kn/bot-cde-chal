import React from 'react';

function EachBot({ bot, onClick }) {
  const { name, health, attack, defense, id } = bot;

  return (
    <div className="bot-card">
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      

      <button onClick={onClick}>REMOVE</button>
    </div>
  );
}

export default EachBot;
