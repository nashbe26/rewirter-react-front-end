import React from "react";
import AboutAi from "../../components/about-ai/about-ai";
import AboutUs from "../../components/about-us/about-us";
import ManageSec from "../../components/contact-sec/contact-sec";
import Feedback from "../../components/feedbacks-sec/feedback";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MilestoneSec from "../../components/milestone-sec/milestone-sec";
import OptionSec from "../../components/options-sec/option-sec";
import TextBox from "../../components/text/text";
import VocabSec from "../../components/vocab-sec/vocab-sec";
import WorkSec from "../../components/work-sec/work-sec";

const LandingPage = () =>{

    return(
        <>
            <Header></Header>
            <TextBox></TextBox>
            <AboutUs></AboutUs>
            <VocabSec></VocabSec>
            <AboutAi></AboutAi>
            <WorkSec></WorkSec>
            <MilestoneSec></MilestoneSec>
            <OptionSec></OptionSec>
            <Feedback></Feedback>
            <ManageSec></ManageSec>
            <Footer></Footer>
        </>
    )

}

export default LandingPage;