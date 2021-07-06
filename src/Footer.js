import React from 'react';
import './Footer.css';

function Footer() {
    var d = new Date();
    var n = d.getFullYear()
    return (
        <div className="Footer">
            <p>Ignacio Jimenez copyright {n}</p>
        </div>
    );
}

export default Footer;