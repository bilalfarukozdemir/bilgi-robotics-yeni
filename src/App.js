import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';
import Profile from './components/Profile';
import Auth from './components/Auth';
import SocialFeed from './components/Socialfeed';
import Login from './components/Login';
import UserProfile from './components/Userprofile';
import Register from './components/Register';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<SocialFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:userId" element={<UserProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
