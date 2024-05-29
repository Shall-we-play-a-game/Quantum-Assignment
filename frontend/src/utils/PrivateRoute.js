import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth.js";
import { Outlet, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import Spinners from "../Spinners";

const PrivateRoutes = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/auth/dashboard`
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          navigate('/login'); // Redirect to login page if not authenticated
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
        navigate('/login'); // Redirect to login page if error occurs
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinners />;
};

export default PrivateRoutes;
