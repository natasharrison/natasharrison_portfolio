import React from 'react';

function Nav() {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:bd4507e2-7f9c-446d-af77-f032d186811f">
                        Resume
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;