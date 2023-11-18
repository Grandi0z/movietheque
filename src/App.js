import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import MovieListing from './components/MovieListing';
import MovieDetail from './components/MovieDetail';
// Custom container component
const CustomContainer = ({ children }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movie/:imdbID',
        element: <MovieListing />,
        children: [
          {
            path: '/movie/:imdbID',
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);
const App = () => (
  <CustomContainer>
    <RouterProvider router={router} />
  </CustomContainer>
);

export default App;
