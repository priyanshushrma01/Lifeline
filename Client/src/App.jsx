import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Error } from './pages/Error'; 
import { Signup } from './pages/Signup';

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [ 
        {
          path:'/',
          element: <Landingpage />,

        },
      ]
    },
    {
      path:'/signup',
      element: <Signup />,
      
    },
    {
      path:'/new/createfund',
      element:<StartFundcomp />
    }
  ]);

  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;
