import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Error } from './pages/Error'; 
import { Signup } from './pages/Signup';
import { SearchBar } from './components/SearchBar';
import { Landingpage } from './pages/LandingPage';

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
          path:'/browsefund',
          element: <SearchBar/>
        }
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
