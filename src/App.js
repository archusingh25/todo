import React from 'react';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/signin';
import Settings from './pages/settings';
import Nofound from './pages/404';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <SignIn />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="home" element={<Homepage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Nofound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

 
export default App;
