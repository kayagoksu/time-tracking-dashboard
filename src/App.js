import React, { useState } from "react";
import items from './data.json';
import Data from "./Data";


function App() {

  const [data, setData] = useState(items);
  const [timeframe, setTimeframe] = useState('daily');

  const changeTimeframe = (e) => {
    setTimeframe(e.target.id);
  };

  return (
    <div>
      <h4>Report for</h4>
      <h1>Jeremy Robson</h1>
      <button id="daily" onClick={changeTimeframe}>Daily</button>
      <button id="weekly" onClick={changeTimeframe}>Weekly</button>
      <button id="monthly" onClick={changeTimeframe}>Monthly</button>
      <Data items={data} timeframe={timeframe} />
    </div>
  );
}

export default App;
