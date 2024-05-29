import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-teal-300 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl text-teal-300 mb-8 uppercase">Welcome to Our Website</h1>
        <div className="flex justify-center">
          <Link to="/login" className="mr-4">
            <button className="p-4 rounded-lg bg-teal-300 text-blue-900 text-xl cursor-pointer hover:bg-blue-900 hover:text-teal-300 focus:outline-none">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="p-4 rounded-lg bg-teal-300 text-blue-900 text-xl cursor-pointer hover:bg-blue-900 hover:text-teal-300 focus:outline-none">
              Register
            </button>
          </Link>
        </div>
          <Link to="/dashboard">
            <button className="mt-5 p-4 rounded-lg bg-teal-300 text-blue-900 text-xl cursor-pointer hover:bg-blue-900 hover:text-teal-300 focus:outline-none">
              Dashboard
            </button>
          </Link>
      </div>
    </div>
  );
};

export default LandingPage;
