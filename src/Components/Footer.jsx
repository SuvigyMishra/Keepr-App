import React from "react";

var CURRENTYEAR = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright Keeper ⓒ {CURRENTYEAR}</p>
        </footer>
    );
}

export default Footer;
