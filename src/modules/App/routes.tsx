import { createBrowserRouter } from 'react-router-dom';

import RouteKey from '../../constants/routes.constant';
import { Main, NotFound } from '../../pages';
import Licenses from '../../pages/Licenses.page';

export const router = createBrowserRouter(
  [
    {
      path: RouteKey.MAIN,
      element: <Main />,
    },
    {
      path: RouteKey.LICENSES,
      element: <Licenses />,
    },
    {
      path: RouteKey.NOT_FOUND,
      element: <NotFound />,
    },
  ],
  {
    basename: RouteKey.BASENAME,
  }
);
