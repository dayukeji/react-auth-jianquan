import React from 'react';

import { Link } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <div>页面布局</div>
      <ul>
        <li>
          <Link to="/">aa</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/Protected">Protected</Link>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
