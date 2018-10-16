import React, * as react from 'react';
import '../index.css';
import { connect } from 'react-redux';
import issuesSelector from '../selectors';
import Navigation from './Navigation';
import PageHeader from './PageHeader';
import IssuesListHeader from './IssuesListHeader';
import ButtonNewIssue from './ButtonNewIssue';
import IssuesList from './IssuesList';
import Search from './Search';

const mapStateToProps = (state) => {
  const issues = issuesSelector(state);
  const [openIssues] = issues;
  const openIssuesCount = openIssues.length;
  const props = {
    openIssuesCount,
  };
  return props;
};

class App extends react.Component {
  render() {
    const { openIssuesCount } = this.props;

    return (
      <div>
        <div className="pagehead">
          <PageHeader />
          <Navigation issuesCount={openIssuesCount} />
        </div>
        <div className="container">
          <div className="issues-listing">
            <div className="issues-listing__subnav">
              <div className="subnav">
                <Search />
                <ButtonNewIssue />
              </div>
            </div>
            <IssuesListHeader />
            <div className="issues-listing__body">
              <IssuesList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
