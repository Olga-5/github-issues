import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { currentVisibilityState } = state;
  const props = {
    currentVisibilityState,
  };
  return props;
};

class IssuesItem extends Component {
  closeIssue = id => () => {
    const { closeIssue } = this.props;
    closeIssue({ id });
  };

  render() {
    const { currentVisibilityState } = this.props;
    const classIcon = cn({
      fas: true,
      'fa-exclamation-circle': currentVisibilityState === 'open',
      'fa-check': currentVisibilityState === 'closed',
    });
    const { title, id } = this.props;
    return (
      <li className="issues__item">
        <div className="issues__status issues__status--open">
          <i className={classIcon} />
        </div>
        <div className="issues__title">
          <a href="https://github.com/facebook/react/issues" className="issues__link">
            {title}
          </a>
        </div>
        {currentVisibilityState === 'open' && (<button className="btn issue__close" type="button" onClick={this.closeIssue(id)}>Close issue</button>)}
      </li>
    );
  }
}

export default connect(mapStateToProps, actions)(IssuesItem);
