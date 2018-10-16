import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addIssue = createAction('ISSUE_ADD', issue => ({ issue: { ...issue, id: _.uniqueId(), state: 'open' } }));
export const closeIssue = createAction('ISSUE_CLOSE');
export const changeVisible = createAction('VISIBLE_CHANGE');
