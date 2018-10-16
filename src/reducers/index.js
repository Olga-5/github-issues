import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { createForms } from 'react-redux-form';
import * as actions from '../actions';

const issues = handleActions({
  [actions.addIssue](state, { payload: { issue } }) {
    return { ...state, [issue.id]: issue };
  },
  [actions.closeIssue](state, { payload: { id } }) {
    const issue = _.values(state).find(item => id === item.id);
    return { ...state, [id]: { ...issue, state: 'closed' } };
  },
}, {});

const currentVisibilityState = handleActions({
  [actions.changeVisible](state, { payload: { visibility } }) {
    return visibility;
  },
}, 'open');

const initialPatternSearchState = '';

export default combineReducers({
  issues,
  currentVisibilityState,
  ...createForms({
    patternSearch: initialPatternSearchState,
  }),
});
