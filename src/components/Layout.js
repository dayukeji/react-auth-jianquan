import React from 'react';

import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <div>页面布局</div>
      <ul>
        <li>
          <Link to="/Public">Public</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/Protected">Protected</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
