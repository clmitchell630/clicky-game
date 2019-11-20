import React from "react";
import "./hero.css";

const Hero = () => {
    return (
        <div className="jumbotron jumbotron-fluid jumbo-jumbotron-bg">
            <div className="container jumbo-jumbotron">
                <h1 className="display-4">How to Play!</h1>
                <p className="lead">Click any image to get started. After clicking an image, do not click it again or you will lose! Try and get as my points as you can by clicking on each unique image.</p>
            </div>
        </div>
    );
};

export default Hero;
