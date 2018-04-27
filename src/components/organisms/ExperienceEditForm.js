import React, { Component } from 'react';

class ExperienceEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      description: nextProps.description
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // This needs to submit to somewhere
    //probably will be a dispatch
    // this.props.submitData({ ...this.state });
    this.setState({ title: '', description: '' });
    e.target.reset();
    //i need a redirect or re-render of sorts here
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ExperienceEditForm.PropTypes = {
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // submitData: PropTypes.func.isRequired
};

export default ExperienceEditForm;
