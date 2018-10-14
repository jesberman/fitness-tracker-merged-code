import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
import JumbotronContact from "./Jumbotron-contact";




class Contact extends Component {
    login() {
        this.props.auth.login();
    }
    render() {

        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                {
                    isAuthenticated() && (

                        <div>
                            <JumbotronContact />


                            <div id="contact-text" >

                                <br></br>

                                <h2 class="standard-text">
                                    We can be reached at:
                                </h2>

                                <br></br>

                                <h3 class="standard-text">
                                    Fitness Tracker, Inc.
                                </h3>

                                <h3 class="standard-text">
                                    143 Wozniak Drive
                                </h3>

                                <h3 class="standard-text">
                                    San Jose, CA 94088
                                </h3>

                                <br></br>

                                <h3 class="standard-text">
                                    555-555-5556
                                </h3>

                                <br></br>

                                <h3 class="standard-text">
                                    jclayton@fitnesstracker.com
                                </h3>

                                <br></br>


                            </div>


                            <div id="robtext1">




                                <h4>
                                    You are logged in! You can now view your{' '}
                                    <Link to="profile">profile area</Link>
                                    .
              </h4>


                                <h1> to add new records click the following link <Link to="FitnessForm">Form</Link></h1>

                            </div>
                        </div>





                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                </a>
                            {' '}to continue.
              </h4>
                    )
                }
            </div>
        );
    }
}

export default Contact;
