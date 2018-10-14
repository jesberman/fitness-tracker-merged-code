import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
import JumbotronAbout from "./Jumbotron-about";




class About extends Component {
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
              <JumbotronAbout />

              <div id="about-text">

                <h4 id="lorem">
                  Let's face it: even if you're incredibly determined, staying fit isn't easy.  From cheating on a
                  diet plan to forgetting to go on a morning run, there are many ways to get sidetracked from your
                  fitness goals.
                </h4>

                <br>
                </br>
                <br>
                </br>

                <h4 id="lorem">
                  At Fintess Tracker, we believe in supporting you in your journey towards a healthy lifestyle.
                  That's why our site provides a simple to use system that will allow you to:
                  <ul>

                    <br>
                    </br>

                    <li>
                      Record the number of steps you ran or walked each day
                    </li>

                    <br>
                    </br>

                    <li>
                      Record journal entries of how your workout went, and how you feel once it is over
                    </li>

                    <br>
                    </br>

                    <li>
                      View your past entries at your leisure
                    </li>

                  </ul>

                </h4>

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

export default About;
