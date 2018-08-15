import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";

import Spinner from "../common/Spinner";
import Link from "react-router-dom/Link";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length) {
        dashboardContent = <h4>TO DO : DIsplay Profile of {user.name}</h4>;
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted"> Welcome {user.name}.</p>
            <p>You haven't completed your profile yet, please add some infos</p>
            <Link to="create/profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile },
)(Dashboard);
