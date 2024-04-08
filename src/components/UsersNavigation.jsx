import React from 'react';
import { Link } from 'react-router-dom';

const UsersNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/userslist">Users List</Link>
        </li>
        <li>
          <Link to="/userslist/new">Add New User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default UsersNavigation;