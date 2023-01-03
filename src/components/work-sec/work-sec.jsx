import React from "react";
import './style.css';

const WorkSec = () =>{

    return(
        <div className="work-sec-container mt-5">
            <div className="groups-dots-work">
                <img src={process.env.PUBLIC_URL+'/img/groups.png'} />
            </div>
            <div className="title-work-sec">
                <div className="text-center">

                    <p className="title-work">Working with Word <span className="text-green">Spinner</span> </p>
                    <p className="title-work">is simple.</p>
                </div>
            </div>
            <div className="title-work-sec-mb">
                <div className="text-center">

                    <p className="title-work">Working with Word <span className="text-green">Spinner</span> is simple.</p>
                   
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="work-desc-container">
                    <div className="array-down">
                        <img src={process.env.PUBLIC_URL + '/img/Arrow Copy.png'}  />
                    </div>
                    <div className="array-up">
                        <img src={process.env.PUBLIC_URL + '/img/Arrow (1).png'}  />
                    </div>
                    <div className="array-down-mb">
                        <img src={process.env.PUBLIC_URL + '/img/arr-mb.png'}  />
                    </div>
                    <div className="array-up-sec">
                        <img src={process.env.PUBLIC_URL + '/img/arr-1-mb.png'}  />
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-3 mt-mb-5">
                            <div className="trans-ele-one">
                                <div className="box-icon">
                                    <img src={process.env.PUBLIC_URL+'/img/text-a.png'} alt="" />
                                </div>
                                <div className="">
                                    <p className="func-text">Paste Text</p>
                                    <p className="text-desc-work">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mt-mb-5">
                            <div className="trans-ele-two">
                                <div className="box-icon">
                                    <img src={process.env.PUBLIC_URL+'/img/chart.png'} alt="" />
                                </div>
                                <div className="">
                                    <p className="func-text">Start Rewrite</p>
                                    <p className="text-desc-work">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mt-mb-5">
                            <div className="trans-ele-three">
                                <div className="box-icon">
                                    <img src={process.env.PUBLIC_URL+'/img/check-all.png'} alt="" />
                                </div>
                                <div className="">
                                    <p className="func-text">Work Done!</p>
                                    <p className="text-desc-work">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WorkSec;