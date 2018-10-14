import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import Chart from "../Chart/Chart";
import Chart2 from "../Chart/Chart2";

import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
              <h3>{profile.name}</h3>

            </div>
            <pre id="json-object">{JSON.stringify(profile, null, 2)}</pre>
            {/* <h3>{profile.nickname}</h3> */}
            <h1>
              Test
              < Chart2>
              </Chart2>
            </h1>
          </Panel>
          
        </div>

      </div>
    );
  }
}

export default Profile;
