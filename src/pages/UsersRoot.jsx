import React from 'react';
import UsersNavigation from '../components/UsersNavigation';
import { Outlet } from 'react-router-dom';

function UsersRootLayout() {
  return (
    <>
      <UsersNavigation />
      <Outlet />
    </>
  );
}

export default UsersRootLayout;