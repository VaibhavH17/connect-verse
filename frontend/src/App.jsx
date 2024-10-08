import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;