import React, { Component } from 'react';

class Experience extends Component {
  state = {};
  render() {
    console.log('in Experience');
    // debugger;
    return (
      <div>
        <img src="" alt="" />
        <div>
          <p>
            {this.props.companyName} {this.props.jobTitle}
          </p>
          <p>
            {this.props.startDate} {this.props.endDate}
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a
          nisi aut cumque vero, recusandae minus explicabo omnis!
        </p>
      </div>
    );
  }
}

export default Experience;
