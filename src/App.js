import React from 'react';
import BotsCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { useState } from 'react';
import './App.css';

function App() {
  const [listedBots, setListedBots] = useState([]);

  return (
    <div className="container">
      <h1 className="header">Bots</h1>
      <div className="row-container">
        <div className="col-container">
          <BotsCollection listedBots={listedBots} setListedBots={setListedBots} />
        </div>
        <div className="col-container">
          <YourBotArmy listedBots={listedBots} setListedBots={setListedBots} />
        </div>
      </div>
    </div>
  );
}

export default App;