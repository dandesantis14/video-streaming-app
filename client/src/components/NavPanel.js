import React from 'react';
import { Link } from "react-router-dom";

function NavPanel() {

    return (
    <div>
        <div id="nav-button-container">
            <Link to="/search" > 🔍 Search&nbsp;&nbsp;</Link>
            <a href="http://localhost:3000/logout">Logout</a>
        </div>
    </div>
    );
}

export default NavPanel;
