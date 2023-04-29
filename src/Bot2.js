import React from "react";
import BotCard from "./BotCard";
import "./YourBotArmy.css";

const Bot2 = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-card-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            buttonText="Release Bot"
            onButtonClick={onRelease}
          />
        ))}
      </div>
      <button className="discharge-button" onClick={onDischarge}>
        Discharge All Bots
      </button>
    </div>
  );
};

export default Bot2