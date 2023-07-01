import './styles/Home.css';
import React from "react";
import Team from "./images/Team.jpg";
import ContactUs from './components/contact/main';
import Logo from "./images/Logo.png";
import Build from "./images/departments/Build.gif";
import Program from "./images/departments/Program.gif"
import CAD from "./images/departments/CAD.gif";

function Home() {
    return (
        <div>
            <div id="home_background"></div>
            <div style={{position: "relative"}}>
                <img id="home_image" src={Logo} alt=""></img>
            </div>
            <p id="home_title">750<br></br>Royals</p>
            <p id="home_subtitle">South Brunswick High School</p>
            <p class="home_section_title" style={{marginTop:"150px"}}>About Our Team</p>
            <img id="home_section_image" src={Team} alt=""></img>
            <p id="home_section_body">750R is a part of the South Brunswick High School robotics program. During their first year as a team, they exceeded all expectations and qualified for the 2019 VEX Robotics World Championships! They believe that the key to success is remaining organized and level-headed through adversity. They plan to achieve this by having clear communication with the whole team and balancing the workload between all their members. This year they hope to continue their success into the new season.</p>
            <p class="home_section_title" style={{marginTop: "100px"}}>What we do</p>
            <p id="home_section_body">Each year, we create a different robot for a different game created by VEX. We follow the design cycle to help us achieve our goals of creating the most efficient robot design.</p>
            <div id="home_what">
                <div id="home_build" class="home_what_section">
                    <img class="home_what_image" src={Build} alt=""></img>
                    <p class="home_what_subtitle">Build</p>
                    <p class="home_what_subbody">Every year, we build new robots according to the game using hardware bought from VEX Stores or by reusing old parts.</p>
                </div>
                <div id="home_prog" class="home_what_section">
                    <img class="home_what_image" src={Program} alt="" style={{marginLeft: "30px", marginTop: "35px"}}></img>
                    <p class="home_what_subtitle">Program</p>
                    <p class="home_what_subbody">We program our robots using PROS which is a fast alternative open source operating system for VEX EDR Microcontrollers.</p>
                </div>
                <div id="home_cad" class="home_what_section">
                <img class="home_what_image" src={CAD} alt=""  style={{marginTop: "35px"}}></img>
                    <p class="home_what_subtitle">CAD</p>
                    <p class="home_what_subbody">Before building our robots, we use Autodesk Inventor, a 3D CAD software, to prototype our designs.</p>
                </div>
            </div>
            <p class="home_section_title" style={{marginTop: "150px"}}>Contact us</p>
            <p id="home_section_body">Please feel free to leave us a message!</p>
            <ContactUs></ContactUs>
        </div>
    );
}

export default Home;