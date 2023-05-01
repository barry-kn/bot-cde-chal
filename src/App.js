import React from 'react';
import BotsCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { useState } from 'react';

function App() {
  const [listedBots, setListedBots] = useState([]);

  return (
    <div className="container">
      <h1 className="header">Bots</h1>
      <div className="row">
        <div className="col-md-6">
          <BotsCollection listedBots={listedBots} setListedBots={setListedBots} />
        </div>
        <div className="col-md-6">
          <YourBotArmy listedBots={listedBots} setListedBots={setListedBots} />
        </div>
      </div>
    </div>
  );
}

export default App;
