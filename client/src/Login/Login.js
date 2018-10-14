import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
import JumbotronLogin from "./Jumbotron-login";




class Login extends Component {
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
              <JumbotronLogin />

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

export default Login;
