import { createSelector } from 'reselect';
import _ from 'lodash';

const getIssues = state => state.issues;
export default createSelector(getIssues, issues => (_.partition(Object.values(issues), issue => issue.state === 'open')));
