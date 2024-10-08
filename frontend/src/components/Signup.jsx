import React, { useState } from 'react';
import { Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [userData ,setUserData]=useState({
    email:'',password:'',confirmPassword:''
  })
  const [error, setError] = useState('');

  const navigate = useNavigate();

  

    // Basic validation
   
    
    const changeInputHandler=(e)=>{
      setUserData(prevState=>{
        return {...prevState,[e.target.name]:e.target.value}
      })
    }
    const registerUser=async(e)=>{
      e.preventDefault();
      setError('')
      try {
        const response=await axios.post(`http://localhost:4000/api/users/register`,userData)
        const newUser=await response.data;
        console.log(newUser);
        if(!newUser)
        {
          setError("Couldnt register user.Please try again")
        }
        navigate('/')
  
      } catch (err) {
        setError(err.response.data.message)
      }
  
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={registerUser} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <FormControl isInvalid={!!error}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name='email'
            value={userData.email}
            onChange={changeInputHandler}
            placeholder="Email"
            className="mb-4"
          />
          
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name='password'
            value={userData.password}
            onChange={changeInputHandler}
            placeholder="Password"
            className="mb-4"
          />
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            name='confirmPassword'
            value={userData.confirmPassword}
            onChange={changeInputHandler}
            placeholder="Confirm Password"
            className="mb-4"
          />
           {error && <p className='text-bold text-red-500'>{error}</p>}
          <Button type="submit" colorScheme="blue">Sign Up</Button>
          <p className="mt-2">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </FormControl>
      </form>
    </div>
  );
};

export default Signup;