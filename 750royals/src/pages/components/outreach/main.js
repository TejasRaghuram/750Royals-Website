import './styles.css';
import React from "react";

function OutreachSection({ title, image, description }) {

    return (
        <div>
            <div id="outreach_container">
                <img src={image} id="outreach_image" alt=""></img>
                <p id="outreach_section_title">{title}</p>
                <p id="outreach_section_description">{description}</p>
            </div>
        </div>

    );
}

export default OutreachSection;