import React from "react";
 

function Bot({ bots, enlistBot }) {
  return (
    <section className="BotCollection">
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.image} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button disabled={bot.enlisted} onClick={() => enlistBot(bot.id)}>
              {bot.enlisted ? "Enlisted" : "Enlist"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Bot;