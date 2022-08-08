import React from 'react';

const TitleBg = ({ title }) => {
    return (
        <div>

            {title === 'Work' ?
                <>
                    <div className="bg-work d-flex justify-content-end">
                        <img src="./images/icon-work.svg" alt="work" />
                    </div>
                </>
                : title === 'Play' ?
                    <>
                        <div className='bg-play d-flex justify-content-end'>
                            <img src="./images/icon-play.svg" alt="play" />
                        </div>
                    </>
                    : title === 'Study' ?
                        <>
                            <div className='bg-study d-flex justify-content-end'
                            >
                                <img src="./images/icon-study.svg" alt="study" />
                            </div>
                        </>


                        : ""}

        </div>
    );
};

export default TitleBg;