import React from 'react';
import { Control, Form } from 'react-redux-form';

const Search = () => (
  <Form className="subnav__search" model="patternSearch">
    <Control.text model="patternSearch" className="subnav__search-input" placeholder="Search" />
  </Form>);

export default Search;
