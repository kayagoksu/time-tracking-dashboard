import React from 'react';

const Data = ({ items, timeframe }) => {

    return (
        <div>
            {items.map((data) => {
                const { id, title, timeframes } = data;

                return (
                    <div key={id}>
                        <h2>{title}</h2>

                        {timeframe === 'daily' ?
                            <>
                                <h2>Daily Current: {timeframes.daily.current}</h2>
                                <h2>Daily Previous: {timeframes.daily.previous}</h2>
                            </>
                            : timeframe === 'weekly' ?
                                <>
                                    <h2>Weekly Current: {timeframes.weekly.current}</h2>
                                    <h2>Weekly Previous: {timeframes.weekly.previous}</h2>
                                </>
                                : timeframe === 'monthly' ?
                                    <>
                                        <h2>Monthly Current: {timeframes.monthly.current}</h2>
                                        <h2>Monthly Previous: {timeframes.monthly.previous}</h2>
                                    </> : ""

                        }

                    </div>);
            })}
        </div>
    );
};

export default Data;