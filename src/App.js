import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Novels from './pages/Novels';
import UsersList from './pages/UsersList';
import UserPage from './pages/UserPage';
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
        element: <Novels />,
        action: novelsAction,
      },
      {
        path: 'arks',
        element: <ArksList />,
        action: arksAction,
      },
      {
        path: 'arts',
        element: <Arts />,
        action: artsAction,
      },
      {
        path: 'archive',
        element: <Archive />,
        action: archiveAction,
      },
      {
        path: 'userslist',
        element: <UsersRootLayout />,
        children: [
          {
            index: true,
            element: <UsersList />,
            loader: usersLoader,
          },
          {
            path: ':userId',
            id: 'user-detail',
            loader: userDetailLoader,
            children: [
              {
                index: true,
                element: <UserPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewUserPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
        action: aboutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
