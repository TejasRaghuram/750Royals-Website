import './styles.css';
import React from "react";

function Bio({ name, role, grade, image, r, g, b }) {

    let color = 'rgba(' + r + ', ' + g + ', ' + b + ', 0.25)';

    return (
        <div>
            <div id="bio_container">
                <img id="bio_image" src={image} alt=""></img>
                <div id="bio_image_filter" style={{backgroundColor:color}}></div>
                <p id="bio_name" class="bio_text">{name}</p>
                <p id="bio_role" class="bio_text">{role}</p>
                <p id="bio_class" class="bio_text">{grade}</p>
            </div>
        </div>

    );
}

export default Bio;