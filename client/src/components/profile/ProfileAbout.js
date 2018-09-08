import React, { Component } from "react";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    let skills = profile.skills.map((skill, index) => {
      return (
        <div key={index} className="p-3">
          <i className="fa fa-check" /> {skill}
        </div>
      );
    });
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
              {profile.bio ? (
                <div>
                  <h3 className="text-center text-info">
                    {profile.user.name.split(" ")[0]}
                    's Bio
                  </h3>
                  <p className="lead">{profile.bio}</p>
                  <hr />
                </div>
              ) : null}

              <h3 className="text-center text-info">Skill Set</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {skills}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
