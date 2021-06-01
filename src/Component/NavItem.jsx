import React from 'react';

import { Link } from "react-router-dom";

import "../Style/Component/NavItem.css";

const NavItem = ({ name, content }) => {
    return (
        <li className="nav-item">
            {name}
            <ul className="dropdown">
                {content.map((item, idx) => {
                    return (
                        <li key={idx} className="nav-link-container">
                            <Link className="nav-link" to={item.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}

export default NavItem;
