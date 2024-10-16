import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Card } from './components/Card';
import { Error } from './pages/Error'; 
import { Signup } from './pages/Signup';
import FileUpload from './components/FileUpload';

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
      path:'/upload',
      element: <FileUpload />
    }
  ]);

  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;
