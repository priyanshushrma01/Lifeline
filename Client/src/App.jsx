import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Error } from './pages/Error'; 
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Landingpage } from './pages/LandingPage';
import { StartFundcomp } from './components/StartFund'
import { Browsefunds } from './components/Browsefunds';
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
        {
          path:'/browsefunds',
          element:<Browsefunds />
        }
      ]
    },
    {
      path:'/signup',
      element: <Signup />,
      
    },
    {
      path:'/signin',
      element:<Signin />,
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
