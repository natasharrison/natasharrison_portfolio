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
                <li>
                    <span>Contact</span>
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Resume
                </li>
            </ul>
        </nav>
    );
}

export default Nav;