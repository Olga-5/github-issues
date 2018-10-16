import React from 'react';

const Navigation = (props) => {
  const { issuesCount } = props;
  return (
    <div className="container">
      <nav className="reponav">
        <a href="https://github.com/facebook/react/issues" className="reponav-item selected">
          <i className="fas fa-exclamation-circle" />
          <span>Issues</span>
          <span className="counter">{issuesCount}</span>
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
