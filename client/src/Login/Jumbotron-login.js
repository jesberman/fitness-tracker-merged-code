import React from "react";
import "../style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JumbotronLogin = () => (
            <div className="jumbotron index login">
                <h1 id="title" className="display-3">Welcome to</h1>
                <h1 id="title" className="display-3">Fitness Tracker</h1>
                <p className="lead standard-text">Please Login to Continue</p>
                <hr className="my-4">
                </hr>
                <p className="lead">
                    {/* <a className="btn btn-primary btn-lg standard-text" id="learn-button" href="about" role="button">Learn more</a> */}
                </p>
            </div>
);

export default JumbotronLogin;