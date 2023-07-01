import './styles/AboutUs.css';
import Bio from './components/bio/main.js';
import React from "react";
import Esha from './images/members/Esha.png';
import Vignesh from './images/members/Vignesh.png';
import Tejas from './images/members/Tejas.png';
import Abhaya from './images/members/Abhaya.png';
import Anika from './images/members/Anika.png';
import Rakshna from './images/members/Rakshna.png';
import Vivek from './images/members/Vivek.png';
import Yegna from './images/members/Yegna.png';
import Vihaan from './images/members/Vihaan.png';
import Anushree from './images/members/Anushree.png';
import Logo from './images/Logo.png';

function AboutUs() {
    return (
        <div>
            <p id="aboutus_title">Meet the team</p>
            <div id="aboutus_background"></div>
            <div id="aboutus_body">
                <Bio name="Esha Vigneshwaran" role="President" grade="Class of 2024" image={Esha} r='100' g='200' b='100'></Bio>
                <Bio name="Vignesh Saravanakumar" role="Captain" grade="Class of 2024" image={Vignesh} r='250' g='100' b='100'></Bio>
                <Bio name="Tejas Raghuram" role="Lead Programmer" grade="Class of 2024" image={Tejas} r='100' g='100' b='250'></Bio>
                <Bio name="Abhaya Avalur" role="Lead Notebook" grade="Class of 2024" image={Abhaya} r='100' g='200' b='100'></Bio>
                <Bio name="Anika Thakur" role="Vice Captain" grade="Class of 2025" image={Anika} r='250' g='100' b='100'></Bio>
                <Bio name="Rakshna Ravishankar" role="Lead Notebook" grade="Class of 2025" image={Rakshna} r='100' g='100' b='250'></Bio>
                <Bio name="Vivek Banker" role="Lead CAD" grade="Class of 2026" image={Vivek} r='100' g='200' b='100'></Bio>
                <Bio name="Yegna Bodepudi" role="Builder" grade="Class of 2026" image={Yegna} r='250' g='100' b='100'></Bio>
                <Bio name="Vihaan Pardeshi" role="Programmer" grade="Class of 2026" image={Vihaan}  r='100' g='100' b='250'></Bio>
                <Bio name="Anushree Chidambaram" role="Recruit" grade="Class of 2027" image={Anushree} r='100' g='200' b='100'></Bio>
                <Bio name="Arjun Gilhotra" role="Recruit" grade="Class of 2027" image={Logo} r='250' g='100' b='100'></Bio>
                <Bio name="Haripranav Yandrapu" role="Recruit" grade="Class of 2027" image={Logo}  r='100' g='100' b='250'></Bio>
            </div>
        </div>
    );
}

export default AboutUs;