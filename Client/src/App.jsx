import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Card } from './components/Card';
import { Error } from './pages/Error'; 
import { Signup } from './pages/Signup';
import { SendMoney } from './pages/SendMoney';

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [ 
        {
          path:'/',
          element: <Card />,
        },
      ]
    },
    {
      path:'/signup',
      element: <Signup />,
      
    },
    {
      path:'/payment',
      element: <SendMoney />,
      
    }
  ]);

  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;
