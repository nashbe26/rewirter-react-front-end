import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToken } from "../../redux/loggedSlice";
import './style.css'
const Header = () =>{

    const hiddenWidthRef = useRef(null)
    const shownWidthRef = useRef(null)

    function swipeRight(){
    
        hiddenWidthRef.current.style.display='none'
        shownWidthRef.current.style.display='block'
    }

    function swipeLeft(){
        
        hiddenWidthRef.current.style.display='block'
        shownWidthRef.current.style.display='none'

    }

    let dispatch = useDispatch()
    
    let token = localStorage.getItem('token')



    return(
        <div className="Header-sec">
            <div className="navar-header">
                <div className="d-flex justify-content-center py-4">
                    <div className="header-container">
                        <div className="logo-sec">
                            <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt="" className="log-nav-img" />
                        </div>
                        <div className="info-sec">
                            {
                                !token  ?
                                
                                <div className="d-flex align-items-center">
                                    <div className="up-input me-5 d-blcok">
                                        <Link to='/login' className="up-btn-nav">Upgrade to Premium</Link>
                                    </div>
                                    <div className="">
                                        <img src={process.env.PUBLIC_URL+'/img/user.png'} alt="" className="user-profile-img" />
                                    </div>
                                </div> : 
                                <div className="d-flex align-items-center">
                                <div className="up-input me-3 d-blcok">
                                    <div className="">

                                    <img src={process.env.PUBLIC_URL+'/img/Shapenot.png'} alt=""  />
                                    </div>
                                </div>
                                <div className="">
                                    <img src={process.env.PUBLIC_URL+'/img/userlog.png'} alt="" className="user-profile-img" />
                                </div>
                            </div>

                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="navar-header-mb">
                <div className="d-flex justify-content-center py-4">
                    <div className="header-container">
                    <div className="d-flex justify-content-between">
                        <div className="col-2">
                        <div className="sidebar-header" ref={hiddenWidthRef}>
                        <li style={{cursor:'pointer'}} className="group-li-green"><div><img src={process.env.PUBLIC_URL+'/img/arr.png'} onClick={swipeRight} /> </div> </li>

                
            </div>
            <div className="sidebar-header-full-width" ref={shownWidthRef}>
                <div className="d-flex justify-content-center sidebar-d ">
                    <div className="width-after-slide">
                        <div className="list-style">
                    <ul>
                        <div className="mt-mb-5 d-flex justify-content-between align-items-center">

                        <li className="setting-item-bar">Settings</li> 
                        <li  style={{cursor:'pointer'}} className=" group-li-green "><div><img src={process.env.PUBLIC_URL+'/img/arr.png'} className="trans-right" onClick={swipeLeft}/> </div> </li>

                        </div>
                        <li className="bg-white-item  mt-3"><div className="group-li-blue me-2 "><img src={process.env.PUBLIC_URL+'/img/ask.png'} /></div>  Grammar Checker</li>
                        <li className="bg-white-item  my-3"><div className="group-li-red me-2" ><img src={process.env.PUBLIC_URL+'/img/text.png'} /></div>Paraphraser</li>
                        <li className="bg-white-item my-3"><div className="group-li-yal me-2"><img src={process.env.PUBLIC_URL+'/img/scan.png'} /></div> Paraphraser</li>
                        <div className="sep-navbar"></div>
                        <li className="bg-white-item  mt-3"><div className="group-li-fqa me-2 "><img src={process.env.PUBLIC_URL+'/img/chrome.png'} /></div>  Add to Chrome</li>
                        <li className="bg-white-item  my-3"><div className="group-li-fqa me-2" ><img src={process.env.PUBLIC_URL+'/img/word.png'} /></div>Add To Word</li>
                    </ul>
                </div>
                <div className="list-fqa">
                    <ul>
                        <div className="d-flex align-items-center">

                        <li className="group-li-fqa"><div><img src={process.env.PUBLIC_URL+'/img/message.png'} /></div></li>
                        <p className="text-green ms-2">Contact Us</p>
                        </div>
                    </ul>
                </div>
                    </div>
                </div>
                
            </div>
                        </div>
                        <div className="col-8 d-flex justify-content-center align-items-center">
                        <div className="logo-sec">
                            <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt="" className="log-nav-img" />
                        </div>
                        </div>
                        <div className="col-2">
                        <div className="info-sec">
                            <div className="d-flex align-items-center">

                                <div className="">
                                    <img src={process.env.PUBLIC_URL+'/img/userlog.png'} alt="" className="user-profile-img" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                  

                
                </div>
            </div>
        </div>
    )

}
export default Header;