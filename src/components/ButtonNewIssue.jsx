import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ButtonNewIssues extends Component {
  addIssue = () => {
    const { addIssue } = this.props;
    addIssue({ title: 'new issue' });
  };

  render() {
    return (
      <button className="btn btn-primary" type="button" onClick={this.addIssue}>
        New issue
      </button>
    );
  }
}

export default connect(null, actions)(ButtonNewIssues);
