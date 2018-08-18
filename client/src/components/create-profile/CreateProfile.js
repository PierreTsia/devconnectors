import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../../components/common/TextFieldGroup";
import TextAreaFieldGroup from "../../components/common/TextAreaFieldGroup";
import InputGroup from "../../components/common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileAction";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  /*   componentDidMount() {
    if (this.props.) {
      this.props.history.push("/dashboard");
    }
  }
 */
  onSubmit(e) {
    e.preventDefault();
    const newProfile = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      social: {
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        linkedin: this.state.linkedin,
        youtube: this.state.youtube,
        instagram: this.state.instagram,
      },
    };

    this.props.createProfile(newProfile, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    const options = [
      {
        label: "Junior Developer",
        value: "juniot",
      },
      { label: "Senior Developer", value: "senior" },
      { label: "Manager", value: "manager" },
      { label: "Student or Learning", value: "student" },
      { label: "Instructor or Teacher", value: "teacher" },
      { label: "Intern", value: "intern" },
      { label: "Other", value: "other" },
    ];
    let socialInputs;

    const socialItems = [
      {
        name: "twitter",
        placeholder: "Twitter Account",
        icon: "fab fa-twitter",
        value: this.twitter,
      },
      {
        name: "linkedin",
        placeholder: "LinkedIn Profile",
        icon: "fab fa-linkedin",
        value: this.linkedin,
      },
      {
        name: "Facebook",
        placeholder: "Facebook Profile",
        icon: "fab fa-facebook",
        value: this.facebook,
      },
      {
        name: "instagram",
        placeholder: "Instagram Account",
        icon: "fab fa-instagram",
        value: this.instagram,
      },
      {
        name: "youtube",
        placeholder: "Youtube Channel",
        icon: "fab fa-youtube",
        value: this.youtube,
      },
    ];

    if (displaySocialInputs) {
      socialInputs = socialItems.map(item => {
        return (
          <div className="mt-2">
            <InputGroup
              placeholder={item.placeholder}
              name={item.name}
              icon={item.icon}
              key={item.value}
              value={item.value}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          </div>
        );
      });
    }
    return (
      <div className="createProfile">
        <div className="container">
          <div className="row">
            <div className="col-md8 m-auto">
              <h1 className="display-4 text-center">Create your profile.</h1>
              <p className="lead text-center">
                Let's get some informations to make your profile stand-out
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handler"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your Profile URL. Name, Nickname, Company name etc... "
                />

                <SelectListGroup
                  value={this.state.status}
                  name="status"
                  onChange={this.onChange}
                  error={errors.status}
                  placeholder="* Select Professional Status"
                  options={options}
                />

                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  info="Could be your own or the one you work for"
                />

                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  info="Could be your own or the one of your company"
                />

                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  info="Ex: Paris, France"
                />

                <TextFieldGroup
                  placeholder="Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use Comma Separated Value ( Ex: HTML, JS, PHP, etc...)"
                />

                <TextFieldGroup
                  placeholder="GitHub User Name"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  info="If you want your latest repos and link, enter your Github user name here"
                />

                <TextAreaFieldGroup
                  placeholder="A Short Bio of yourself"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  info="Tell us a bit more about yourself"
                />
                <div className="col-mb-3">
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs,
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
              </form>

              {socialInputs}
              <input
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-info btn-block mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { createProfile },
)(CreateProfile);
