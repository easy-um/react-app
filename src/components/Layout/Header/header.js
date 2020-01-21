import React from 'react';

import Nav from './nav';
import * as classes from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <Nav {...props} />
    </header>
  );
};

export default Header;