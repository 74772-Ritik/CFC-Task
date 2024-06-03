// src/Register.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://login-system-umber.vercel.app/api/register', {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        mobileNo: data.mobile,
      });
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register('fullName', { required: true })}
              className="mb-2 p-2 w-full border rounded"
            />
            {errors.fullName && <span className="text-red-500">Full Name is required</span>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="mb-2 p-2 w-full border rounded"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile"
              {...register('mobile', { required: true })}
              className="mb-2 p-2 w-full border rounded"
            />
            {errors.mobile && <span className="text-red-500">Mobile is required</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              className="mb-2 p-2 w-full border rounded"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
