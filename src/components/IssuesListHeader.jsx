import React, { Component } from 'react';
import { connect } from 'react-redux';
import issuesSelector from '../selectors';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const issues = issuesSelector(state);
  const [openIssues, closedIssues] = issues;
  const openIssuesCount = openIssues.length;
  const closedIssuesCount = closedIssues.length;
  const props = {
    openIssuesCount,
    closedIssuesCount,
  };
  return props;
};


class IssuesListHeader extends Component {
  changeVisible = visibility => () => {
    const { changeVisible } = this.props;
    changeVisible({ visibility });
  }

  render() {
    const { openIssuesCount, closedIssuesCount } = this.props;
    return (
      <div className="issues-listing__header">
        <div className="issues-listing__states">
          <button className="btn-link btn-link--selected" type="button" onClick={this.changeVisible('open')}>
            <i className="fas fa-exclamation-circle" />
            {openIssuesCount}
              Open
          </button>
          <button className="btn-link btn-link--selected" type="button" onClick={this.changeVisible('closed')}>
            <i className="fas fa-check" />
            {closedIssuesCount}
            Closed
          </button>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, actions)(IssuesListHeader);
