import React from 'react';
import TitleBg from './TitleBg';
import { ThreeDots } from 'react-bootstrap-icons';

const Data = ({ items, timeframe }) => {

    return (
        <div>
            {items.map((data) => {
                const { id, title, timeframes } = data;

                return (
                    <div key={id}>
                        <div className='card'>
                            <TitleBg title={title} />
                        </div>
                        <div className='card'>

                            <div>
                                <h2 className='d-flex justify-content-between'>{title}
                                    <button className='btn pe-5' type='button'>
                                        <h2><ThreeDots /></h2>
                                    </button></h2>

                            </div>

                            {timeframe === 'daily' ?
                                <div>
                                    <h2>{timeframes.daily.current}hrs</h2>
                                    <h2>Yesterday - {timeframes.daily.previous}hrs</h2>
                                </div>
                                : timeframe === 'weekly' ?
                                    <div>
                                        <h2>{timeframes.weekly.current}hrs</h2>
                                        <h2>Last Week - {timeframes.weekly.previous}hrs</h2>
                                    </div>
                                    : timeframe === 'monthly' ?
                                        <div>
                                            <h2>{timeframes.monthly.current}hrs</h2>
                                            <h2>Last Month {timeframes.monthly.previous}hrs</h2>
                                        </div> : ""

                            }
                        </div>
                    </div>);
            })}
        </div>
    );
};

export default Data;