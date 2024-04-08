import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Novels from './pages/Novels';
import UsersRootLayout from './pages/UsersRoot';
import UsersList from './pages/UsersList';
import UserPage from './pages/UserPage';
import NewUserPage from './pages/NewUserPage';
import Arts from './pages/Arts';
import ArksList from './pages/ArksList';
import Archive from './pages/Archive';
import About from './pages/About';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'novels',
        element: <Novels />
      },
      {
        path: 'arks',
        element: <ArksList />
      },
      {
        path: 'arts',
        element: <Arts />
      },
      {
        path: 'archive',
        element: <Archive />
      },
      {
        path: 'userslist',
        element: <UsersRootLayout />,
        children: [
          {
            index: true,
            element: <UsersList />
          },
          {
            path: ':userId',
            id: 'user-detail',
            children: [
              {
                index: true,
                element: <UserPage />
              },
            ],
          },
          {
            path: 'new',
            element: <NewUserPage />
          },
        ],
      },
      {
        path: 'about',
        element: <About />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
