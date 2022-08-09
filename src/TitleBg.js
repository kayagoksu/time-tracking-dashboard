import React from 'react';

const TitleBg = ({ title }) => {
    return (
        <div>

            {title === 'Work' ?
                <>
                    <div className="bg-work d-flex justify-content-end">
                        <img src="./images/icon-work.svg" alt="work" className='' />
                    </div>
                </>
                : title === 'Play' ?
                    <>
                        <div className='bg-play d-flex justify-content-end pe-3'>
                            <img src="./images/icon-play.svg" alt="play" />
                        </div>
                    </>
                    : title === 'Study' ?
                        <>
                            <div className='bg-study d-flex justify-content-end pe-3'
                            >
                                <img src="./images/icon-study.svg" alt="study" />
                            </div>
                        </>
                        : title === 'Exercise' ?
                            <>
                                <div className='bg-exercise d-flex justify-content-end pe-3'
                                >
                                    <img src="./images/icon-exercise.svg" alt="exercise" />
                                </div>
                            </>
                            : title === 'Social' ?
                                <>
                                    <div className='bg-social d-flex justify-content-end pe-3'
                                    >
                                        <img src="./images/icon-social.svg" alt="social" />
                                    </div>
                                </>
                                : title === 'Self Care' ?
                                    <>
                                        <div className='bg-selfcare d-flex justify-content-end pe-3'
                                        >
                                            <img src="./images/icon-self-care.svg" alt="self-care" />
                                        </div>
                                    </>
                                    : ""}

        </div >
    );
};

export default TitleBg;