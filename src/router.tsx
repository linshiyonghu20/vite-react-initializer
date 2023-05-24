import { createBrowserRouter } from 'react-router-dom';
import Home from '@p/home';
import About from '@p/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/about', element: <About /> },
]);

export default router;
