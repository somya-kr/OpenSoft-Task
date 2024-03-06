import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    const verifyAccessToken = async () => {
      if (accessToken) {
        try {
          const response = await axios.post(
            'https://url-shortner-backend-teal.vercel.app/workspace',
            {},
            {
              headers: {
                Authorization: `${accessToken}`
              }
            }
          );
          if (response.data.status) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            navigate('/login');
          }
        } catch (error) {
          setIsAuthenticated(false);
          navigate('/login'); 
        }
      } else {
        setIsAuthenticated(false);
        navigate('/login');
      }
      setIsLoading(false);
    };

    verifyAccessToken();
  }, [navigate, accessToken]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoute;
