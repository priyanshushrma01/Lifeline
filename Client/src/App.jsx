import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Card } from './components/Card';
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
          element: <Card />,
        },
      ]
    },
    {
      path:'/signup',
      element: <Signup />,
      
    }
  ]);

  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;
