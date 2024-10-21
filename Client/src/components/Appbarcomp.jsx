import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Appbarcomp() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user/me', {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response);
        setUser(response.data.me);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token') && user==null) {
      fetchUser();
    }
  }, []);

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="w-1/5 h-20">
          <img
            src="/Logo.jpg"
            alt="Lifeline Logo"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex gap-16">
          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-6 mt-3">
              <li className='text-2xl text-center'>
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li className=' text-2xl text-center'>
                <Link
                  to="/browsefunds"
                  className="hover:text-blue-500"
                >
                  Browse Fundraisers
                </Link>
              </li>
              <li className=' text-2xl text-center'>
                <Link
                  to="/about"
                  className="hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li className=' text-2xl text-center'>
                <Link
                  to="/contact"
                  className="hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="actions">
            {user ? ( 
              <div className='flex gap-4'>
                <button
                  onClick={() => navigate('/new/create')}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded"
                >
                  Start a Fundraiser
                </button>
                <div
                  onClick={() => navigate('/profile')}
                  className=" text-white flex font-bold items-center gap-1 cursor-pointer rounded"
                >
                  <div className='hover:text-blue-700'>{user.username}</div>
                  <div className='w-16 h-16'>
                    <img src={user.photo_id} className='w-full rounded-full object-cover h-full' />
                  </div>
                </div>
                <button onClick={()=>{localStorage.removeItem('token');}}>logout</button>
              </div>
            ) : (
              <div className="space-x-2 mt-3">
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Start a Fundraiser
                </button>
                <button
                  onClick={() => navigate('/signin')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}