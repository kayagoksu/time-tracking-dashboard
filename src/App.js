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
            <main>
                <section className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card card-timeframes d-flex text-start">
                                <div className="card card-person px-4">
                                    <img src="./images/image-jeremy.png" alt="Jeremy Robson image" className="img-person mt-5" />
                                    <h6 className="mt-5">Report for</h6>
                                    <h1 className="display-6">Jeremy Robson</h1>
                                </div>
                                <div className="mt-5 mb-5 text-start px-4">
                                    <div>
                                        <button id="daily" className="btn" onClick={changeTimeframe}>Daily</button>
                                    </div>
                                    <div>
                                        <button id="weekly" className="btn" onClick={changeTimeframe}>Weekly</button>
                                    </div>
                                    <div>
                                        <button id="monthly" className="btn" onClick={changeTimeframe}>Monthly</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div>
                                <Data items={data} timeframe={timeframe} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
