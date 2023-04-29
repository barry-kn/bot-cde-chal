import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error(error));
  }, []);

  const enlistBot = (id) => {
    const botToAdd = bots.find((bot) => bot.id === id);
    setEnlistedBots([...enlistedBots, botToAdd]);
    setBots(
      bots.map((bot) => {
        if (bot.id === id) {
          return {
            ...bot,
            enlisted: true,
          };
        } else {
          return bot;
        }
      })
    );
  };

  const releaseBot = (id) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== id));
    setBots(
      bots.map((bot) => {
        if (bot.id === id) {
          return {
            ...bot,
            enlisted: false,
          };
        } else {
          return bot;
        }
      })
    );
  };

  const dischargeBot = (id) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== id));
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        setBots(bots.filter((bot) => bot.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header>
        <h1>Bot Battlr</h1>
      </header>
      <main>
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <YourBotArmy
          enlistedBots={enlistedBots}
          releaseBot={releaseBot}
          dischargeBot={dischargeBot}
        />
      </main>
    </div>
  );
}

export default App;