import React, { Component } from 'react';

class ExperienceEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      companyName: nextProps.companyName,
      jobTitle: nextProps.jobTitle,
      startDate: nextProps.startDate,
      endDate: nextProps.endDate
    };
  }

  handleSubmit(e) {
    console.log('in ExperienceEditForm handleSubmit');
    e.preventDefault();
    this.props.updateUserData({ ...this.state });
    e.target.reset();
    //i need a redirect or re-render of sorts here?
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log('in ExperienceEditForm');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className>
            <label htmlFor="companyName">companyName: </label>
            <input
              id="companyName"
              name="companyName"
              onChange={this.handleChange}
              value={this.state.companyName}
            />
          </div>
          <div>
            <label htmlFor="jobTitle">Description: </label>
            <input
              id="jobTitle"
              name="jobTitle"
              onChange={this.handleChange}
              value={this.state.jobTitle}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date: </label>
            <input
              id="startDate"
              name="startDate"
              onChange={this.handleChange}
              value={this.state.startDate}
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date: </label>
            <input
              id="endDate"
              name="endDate"
              onChange={this.handleChange}
              value={this.state.endDate}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ExperienceEditForm.PropTypes = {
  // companyName: PropTypes.string.isRequired,
  // jobTitle: PropTypes.string.isRequired,
  // submitData: PropTypes.func.isRequired
};

export default ExperienceEditForm;
