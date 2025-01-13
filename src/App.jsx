import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/Navpage/About.jsx';
// import Courses from './components/Courses';
import Contact from './component/Navpage/Contact.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import LoginSignUp from './component/LoginSignUp/LoginSignUppage.jsx';
import Floating from './Float.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element ={<LoginSignUp />} />
      </Routes>

      <Floating />
    </Router>
  );
}

export default App;
