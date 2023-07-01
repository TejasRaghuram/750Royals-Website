import './styles/Awards.css';
import React from "react";
import AwardImage from './images/awards/Awards.png';

function Awards() {
    return (
        <div>
            <div id="awards_background"></div>
            <img id="awards_image" src={AwardImage} alt=""></img>
            <p id="awards_title">Awards</p>
            <p id="awards_subtitle">Currently, we don't have any awards this season(Don't worry, this is soon to change :D)</p>
        </div>
    );
}

export default Awards;