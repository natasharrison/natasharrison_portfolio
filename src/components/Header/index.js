import React from 'react';
import coverImage from "../../assests/cover/cover-image.jpg";
import Nav from "../Nav";

const Header = () => {
    return (
        <div>
            <img src={coverImage} style={{ width: "100%" }} alt="cover" />
            <h1>Natasha Harrison</h1>
            <p>Developer</p>
        <Nav></Nav>
        </div>
    )
}

export default Header;