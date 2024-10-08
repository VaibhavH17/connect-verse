import React, { useState,useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'


import { Button, Input, Checkbox, FormControl, FormLabel, FormErrorMessage, useToast } from '@chakra-ui/react'; 


const Login = () => {
  const [userData ,setUserData]=useState({
    username:'',password:'',rememberMe:false
   })


  const [error, setError] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const loginUser=async(e)=>{
    e.preventDefault();
    setError('')
    try {
      const response=await axios.post(`http://localhost:4000/api/users/login`,userData);
      const user=await response.data;
     
      navigate('/')
    } catch (err) {
      setError(err.response.data.message)
      
    }
  
  }
  const changeInputHandler=(e)=>{
    setUserData(prevState=>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={loginUser} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
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
         
          {error && <div className="text-red-500">{error}</div>}
          <Button type="submit" colorScheme="blue">Login</Button>
          <p className="mt-2">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
          </p>
        </FormControl>
      </form>
    </div>
  );
};

export default Login;