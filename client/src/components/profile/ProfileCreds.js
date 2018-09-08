import React, { Component } from "react";
import Moment from "react-moment";
import isEmpty from "../../validation/is-empty";

class ProfileCreds extends Component {
  render() {
    const { profile } = this.props;

    let educationContent = profile.education.length ? (
      profile.education.sort((a, b) => (a.from > b.from ? -1 : 1)).map(edu => {
        return (
          <li key={edu._id} className="list-group-item">
            <h4>{edu.school}</h4>
            <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
            {isEmpty(edu.to) ? (
              <span>Now</span>
            ) : (
              <Moment format="DD/MM/YYYY">{edu.to}</Moment>
            )}
            {edu.degree ? (
              <p>
                {" "}
                <strong>Degree:</strong> {edu.degree}
              </p>
            ) : null}
            <p>
              <strong>Field of Study:</strong> {edu.fieldofstudy}
            </p>
          </li>
        );
      })
    ) : (
      <li className="list-group-item">
        <p> ...</p>
      </li>
    );

    let experienceContent = profile.experience.length ? (
      <ul className="list-group">
        {profile.experience
          .sort((a, b) => (a.from > b.from ? -1 : 1))
          .map(exp => {
            return (
              <li key={exp._id} className="list-group-item">
                <h4>{exp.company}</h4>
                <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
                {isEmpty(exp.to) ? (
                  <span>Now</span>
                ) : (
                  <Moment format="DD/MM/YYYY">{exp.to}</Moment>
                )}
                <p>
                  <strong>Position:</strong> {exp.title}
                </p>
                <p>
                  <strong>Description:</strong> {exp.description}
                </p>
              </li>
            );
          })}
      </ul>
    ) : (
      <li className="list-group-item">
        <p> ...</p>
      </li>
    );
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-info">Experience</h3>
            {experienceContent}
          </div>

          <div className="col-md-6">
            <h3 className="text-center text-info">Education</h3>
            {educationContent}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
