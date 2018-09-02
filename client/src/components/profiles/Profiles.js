import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProfiles } from "../../actions/profileActions";

import Spinner from "../common/Spinner";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (!profiles || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length) {
        <h1>Profiles here</h1>;
      } else {
        profileItems = <h4>No Profiles Found!</h4>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developers Profiles</h1>
              <p className="lead text-center">
                Browse and connect with Developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { getProfiles },
)(Profiles);