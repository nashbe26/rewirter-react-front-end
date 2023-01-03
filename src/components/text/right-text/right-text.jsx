import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import '../style.css'

const RightBoxText = () =>{

    let {text} = useSelector(state => state.rewriteStatus)
    let {status} = useSelector(state => state.rewriteStatus)

    useEffect(()=>{
        console.log(text);
    },[text,status])

    return(
        <div className="box-text-container">

            <div className="typed-text-box pt-5 pb-3">
                {status != "succeeded" && status != "fetching" ?<p className="typed-text">Your rewritten text...</p> 
                :
                <>

                {status == "fetching" ? <p className="typed-text">Loading...</p> : <p className="typed-text">{text.paraphrases[0].original}</p> }
                
                </>

                }
                
            </div>
            <div className="button-section">
                <div className="button-box-right">
                    <div className="button-not-available">
                        <img src={process.env.PUBLIC_URL+'/img/refresh.png'} alt=''/>
                    </div>
                    <div className="button-not-available">
                        <img src={process.env.PUBLIC_URL+'/img/copie.png'} alt=''/>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default RightBoxText;