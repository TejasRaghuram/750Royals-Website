import './styles/Error.css';
import React from "react";

function Error() {
    return (
        <div>
            <div id="error_background"></div>
            <div id="error_body">
                <p id="error_title">Error 404</p>
                <p id="error_subtitle">Page Not Found</p>
            </div>
        </div>
    );
}

export default Error;