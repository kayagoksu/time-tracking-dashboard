import React from 'react';
import data from './data.json';

const dailyInfo = data.map((daily) => daily);
console.log(dailyInfo);

const fetchDataDaily = () => {



};

const fetchDataWeekly = () => {
    console.log(data[0].title);
};

const fetchDataMonthly = () => {
    console.log(data[0].title);
};

const Time = () => {
    return (
        <div>

            <div>
                <h3>Report for</h3>
                <h1>Jeremy Robson</h1>
            </div>
            <div>
                <button onClick={fetchDataDaily}>Daily</button>
                <button onClick={fetchDataWeekly}>Weekly</button>
                <button onClick={fetchDataMonthly}>Monthly</button>
            </div>

            <div>




            </div>

        </div>
    );
};

export default Time;