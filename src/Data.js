import React from 'react';
import TitleBg from './TitleBg';
import { ThreeDots } from 'react-bootstrap-icons';

const Data = ({ items, timeframe }) => {

    return (
        <div className="container">
            <div className='row'>

                {items.map((data) => {
                    const { id, title, timeframes } = data;

                    return (
                        <div key={id} className='col-4'>
                            <div className='card card-data'>
                                <TitleBg title={title} />
                            </div>


                            <div className='card card-data text-start px-4'>

                                <div>
                                    <h5 className='d-flex justify-content-between align-items-center'>{title}
                                        <button className='btn' type='button'>
                                            <h2><ThreeDots /></h2>
                                        </button></h5>
                                </div>

                                {timeframe === 'daily' ?
                                    <div className='mb-4'>
                                        <div className='display-4 mb-2'>{timeframes.daily.current}hrs</div>
                                        <h6>Yesterday - {timeframes.daily.previous}hrs</h6>
                                    </div>
                                    : timeframe === 'weekly' ?
                                        <div>
                                            <div className='display-4 mb-2'>{timeframes.weekly.current}hrs</div>
                                            <h6>Last Week - {timeframes.weekly.previous}hrs</h6>
                                        </div>
                                        : timeframe === 'monthly' ?
                                            <div>
                                                <div className='display-4 mb-2'>{timeframes.monthly.current}hrs</div>
                                                <h6>Last Month {timeframes.monthly.previous}hrs</h6>
                                            </div> : ""
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Data;