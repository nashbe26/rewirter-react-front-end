import React from "react";
import './style.css'
const AboutUs = () =>{

    return(
        <>
         <div className="aboutus-sec">
            <div className="groups-dots">
                <img src={process.env.PUBLIC_URL+'/img/groups.png'} />
            </div>
            <div className="d-flex justify-content-center py-5">
                <div className="cotnainer-aboutus">
                    <div className="green-back-sec">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <img src={process.env.PUBLIC_URL+'/img/object.png'} />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL+'/img/object (1).png'} />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL+'/img/object (2).png'} />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL+'/img/object (3).png'} />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL+'/img/object (4).png'} />
                                </div>
                            </div>
                        </div>
                        <div className="green-back-sec-mb">
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 pb-4">
                                    <img src={process.env.PUBLIC_URL+'/img/object.png'} />
                                </div>
                                <div className="col-6 pb-4">
                                    <img src={process.env.PUBLIC_URL+'/img/object (1).png'} />
                                </div>
                            </div>
                                <div className="row d-flex justify-content-center">

                                <div className="col-6 pb-4">
                                    <img src={process.env.PUBLIC_URL+'/img/object (2).png'} />
                                </div>
                                <div className="col-6 pb-4">
                                    <img src={process.env.PUBLIC_URL+'/img/object (3).png'} />
                                </div>
                                </div>
                                <div className="row d-flex justify-content-center">

                                <div className="col-6 pb-4">
                                    <img src={process.env.PUBLIC_URL+'/img/object (4).png'} />
                                </div>
                                <div className="col-6">

                                </div>
                                </div>
                           
                        </div>
                </div>

            </div>
            <div className="d-flex justify-content-center pt-4 pb-5">
            <div className="about-box-container">
                    <div className="about-box">
                        <p id="about-text">About Word <span className="text-green"> Spinner</span></p>
                        <div className="my-2">
                            <p id="size-compagnie">These companies release their own versions of the operating systems with minor changes, and yet always.</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center  mt-4 mb-2">
                            <button className="btn-play-video"><img src={process.env.PUBLIC_URL+'/img/play.png'} className="me-2"/>How it Works</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className=" d-flex justify-content-center ">
                <div className="row box-card-about mt-3">
                    <div className="col-12 col-lg-6">
                        <div className="card-aboutus">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2 pos-about-feed">
                                    <div className="box-green-about">
                                        <img src={process.env.PUBLIC_URL + '/img/vecteur4 (1).png'} />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10">
                                    <p id="about-us-text-sec"> Advanced Article Rewriter</p>
                                    <p id="pos-aboutme-text">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                    <div className="card-aboutus">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2 pos-about-feed">
                                    <div className="box-green-about">
                                        <img src={process.env.PUBLIC_URL + '/img/vecteur4 (2).png'} />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10">
                                    <p id="about-us-text-sec"> Advanced Article Rewriter</p>
                                    <p id="pos-aboutme-text">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                    <div className="card-aboutus">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2 pos-about-feed">
                                    <div className="box-green-about">
                                        <img src={process.env.PUBLIC_URL + '/img/vecteur4 (3).png'} />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10">
                                    <p id="about-us-text-sec"> Advanced Article Rewriter</p>
                                    <p id="pos-aboutme-text">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                    <div className="card-aboutus">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-2 pos-about-feed">
                                    <div className="box-green-about">
                                        <img src={process.env.PUBLIC_URL + '/img/vecteur4 (4).png'} />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <p id="about-us-text-sec"> Advanced Article Rewriter</p>
                                    <p id="pos-aboutme-text">Biz məlumatların statistik təhlili üzrə sizlərə professional biznes xidmətlərimizi təklif edirik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
       
        
    )

}

export default AboutUs;