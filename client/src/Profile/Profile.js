import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
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
      console.log({ userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          {/* <h1>{profile.name}</h1> */}

          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>User: {profile.nickname}</h3>
              <h3>Email: {profile.name}</h3>

            </div>
            {/* <pre id="preID">
              {JSON.stringify(profile, null, 2)}
            </pre> */}
            {/* <div>
              {profile.sub}
            </div> */}
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
