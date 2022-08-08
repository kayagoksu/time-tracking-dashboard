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
    <>
      <div className="bg">
        <img src="./images/image-jeremy.png" alt="Jeremy Robson image" className="img-thumbnail" />
        <div>Report for</div>
        <h1 className="display-4">Jeremy Robson</h1>
        <button id="daily" className="btn" onClick={changeTimeframe}>Daily</button>
        <button id="weekly" className="btn" onClick={changeTimeframe}>Weekly</button>
        <button id="monthly" className="btn" onClick={changeTimeframe}>Monthly</button>
      </div>
      <div>

        <Data items={data} timeframe={timeframe} />
      </div>
    </>
  );
}

export default App;
