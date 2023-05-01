import React, { useState, useEffect } from 'react';
import EachBot from './EachBot';
import '../App.css';

function BotsCollection({ listedBots, setListedBots }) {
  const [bots, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
      .then((response) => response.json())
      .then((bots) => setData(bots))
      .catch((error) => console.error(error));
  }, []);

  function listBot(bot) {
    if (!listedBots.includes(bot)) {
      setListedBots([...listedBots, bot]);
    }
  }

  return (
    <div className='bots-collection'>
      {bots.map((bot) => (
        <EachBot onClick={listBot} bot={bot} key={bot.id} setListedBots={setListedBots} />
      ))}
    </div>
  );
}

export default BotsCollection;


