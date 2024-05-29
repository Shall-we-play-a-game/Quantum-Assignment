import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/register`,
        { name, dateOfBirth, email, password }
      );
      if (response.data.success){
        navigate("/login")
      } else{
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <>
    <div className="bg-gradient-to-br from-blue-900 to-teal-300 min-h-screen flex justify-center items-center">
      <div className="login-container bg-black bg-opacity-50 w-1/2 p-12 rounded-lg">
        <h1 className="text-center text-4xl text-teal-300 mb-8 uppercase">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            placeholder="Name"
            className="w-full mb-8 p-4 rounded-lg bg-black bg-opacity-50 text-teal-300 text-xl focus:outline-none"
          />
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Date of Birth"
            className="w-full mb-8 p-4 rounded-lg bg-black bg-opacity-50 text-teal-300 text-xl focus:outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            placeholder="Email"
            className="w-full mb-8 p-4 rounded-lg bg-black bg-opacity-50 text-teal-300 text-xl focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="password"
            className="w-full mb-8 p-4 rounded-lg bg-black bg-opacity-50 text-teal-300 text-xl focus:outline-none"
          />
          <input
            type="submit"
            value="Register"
            className="w-full p-4 rounded-lg bg-teal-300 text-blue-900 text-xl cursor-pointer hover:bg-blue-900 hover:text-teal-300 focus:outline-none"
          />
        </form>
        
      </div>
    </div>
  </>;
};

export default Register;
