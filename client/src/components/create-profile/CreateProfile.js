import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../../components/common/TextFieldGroup";
import TextAreaFieldGroup from "../../components/common/TextAreaFieldGroup";
import InputGroup from "../../components/common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";

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

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  onChange(e) {
    console.log("e: ", e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  options = [
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

  /*   <div className="mb-3">
  <button type="button" className="btn btn-light">
    Add Social Network Links
  </button>
  <span className="text-muted">Optional</span>
</div>
 */
  render() {
    const { errors } = this.state;
    const displaySocialInputs = this.state;

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
                  errors={errors.handle}
                  info="A unique handle for your Profile URL. Name, Nickname, Company name etc... "
                />

                <SelectListGroup
                  value={this.state.status}
                  name="status"
                  onChange={this.onChange}
                  errors={errors.handle}
                  placeholder="* Select Professional Status"
                  options={this.options}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  erros: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps)(CreateProfile);
