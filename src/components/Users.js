import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <p>Number of Users: {this.props.users.length}</p>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>
                <p>{user.username}</p>
                <p>{user.hometown}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ users: state.users }))(Users);
