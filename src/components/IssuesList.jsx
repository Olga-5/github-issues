import React, * as react from 'react';
import { connect } from 'react-redux';
import issuesSelector from '../selectors';
import IssuesItem from './IssuesItem';

const mapStateToProps = (state) => {
  const { currentVisibilityState, patternSearch } = state;
  const issues = issuesSelector(state);
  const [openIssues, closedIssues] = issues;
  const props = {
    openIssues,
    closedIssues,
    currentVisibilityState,
    patternSearch,
  };
  return props;
};

class IssuesList extends react.Component {
  render() {
    const {
      currentVisibilityState, openIssues, closedIssues, patternSearch,
    } = this.props;
    const issuesList = currentVisibilityState === 'open' ? openIssues : closedIssues;
    if (issuesList.length === 0) {
      return null;
    }
    const expression = new RegExp(patternSearch, 'i');
    const filteredList = issuesList.filter(({ title }) => expression.exec(title));
    return (
      <ul className="issues">
        {filteredList.map(({ id, title }) => <IssuesItem key={id} title={title} id={id} />)}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(IssuesList);
