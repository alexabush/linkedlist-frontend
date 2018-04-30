import React, { Component } from 'react';

class Job extends Component {
  state = {};
  render() {
    const { company, equity, salary, title } = this.props;
    return (
      <div>
        <div>
          <p>
            {title} <span>@{company}</span>
          </p>
          <p>{salary} | </p>
        </div>
      </div>
    );
  }
}

export default Job;
