import React from 'react';
import { Link } from 'gatsby';

import '../assets/sass/main.scss';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      KMU SSC ICT CLUB
    </Link>
  </header>
);

export default Header;
