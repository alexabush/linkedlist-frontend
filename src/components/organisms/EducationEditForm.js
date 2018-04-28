import React, { Component } from 'react';

class EducationEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: '',
      institution: '',
      endDate: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      degree: nextProps.degree,
      institution: nextProps.institution,
      endDate: nextProps.endDate
    };
  }

  handleSubmit(e) {
    console.log('in EducationEditForm handleSubmit');
    e.preventDefault();
    this.props.updateUserData({ ...this.state });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log('in EducationEditForm');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className>
            <label htmlFor="degree">Degree: </label>
            <input
              id="degree"
              name="degree"
              onChange={this.handleChange}
              value={this.state.degree}
            />
          </div>
          <div>
            <label htmlFor="institution">Institution: </label>
            <input
              id="institution"
              name="institution"
              onChange={this.handleChange}
              value={this.state.institution}
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

EducationEditForm.PropTypes = {
  // degree: PropTypes.string.isRequired,
  // institution: PropTypes.string.isRequired,
  // submitData: PropTypes.func.isRequired
};

export default EducationEditForm;
