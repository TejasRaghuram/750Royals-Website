import './styles/Outreach.css';
import React from "react";
import OutreachSection from './components/outreach/main.js';
import LeapCoderz from './images/outreach/LeapCoderz.jpg';

function Outreach() {
    return (
        <div>
            <div id="outreach_background"></div>
            <p id="outreach_title">Outreach</p>
            <OutreachSection image={LeapCoderz} title="LeapCoderz" description="As a team, we volunteered at LeapCoderz, a S.T.E.A.M. based learning center. We taught robotics, coding, chess, and public speaking. Overall, LeapCoderz was a great experience!"></OutreachSection>
        </div> 
    );
}

export default Outreach;