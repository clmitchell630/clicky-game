import React from "react";
import "./navbar.css";


const Navbar = props => {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="navi-1">Rorschach Clicker</h2>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h2 className="navi-3">Score: {props.score} | Top Score: {props.topScore}</h2>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;