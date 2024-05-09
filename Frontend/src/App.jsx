import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screens/Home';
import Hostel from './screens/Hostel';
import Root from './root';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
            path: '/',
            element: <Home />,
          },
        {
          path: 'hostel',
          element: <Hostel />,
        },
       
      ],
    },
  ]);

  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default App;