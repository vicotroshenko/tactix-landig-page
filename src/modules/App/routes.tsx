import { createBrowserRouter } from 'react-router-dom';

import { Main, NotFound } from '../../pages';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: '/tactix-landig-page',
  }
);
