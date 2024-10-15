<<<<<<< HEAD
import './App.css'
import { Card } from './components/Card'
import { Appbar } from './components/Appbar'
import Footer from './components/Footer/Footer'
=======
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Card } from './components/Card';
import { Error } from './pages/Error'; 
import { Signup } from './pages/Signup';
>>>>>>> 81a577187ba4a539c701eddae61e4aa7c8ac833e

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
<<<<<<< HEAD
    <>
      <Appbar/>
      <Card/>
      <footer>
      <Footer/>
      </footer>
    </>
  )
=======
    <RouterProvider router={AppRouter} />
  );
>>>>>>> 81a577187ba4a539c701eddae61e4aa7c8ac833e
}

export default App;
