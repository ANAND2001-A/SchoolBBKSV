import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/Navpage/About.jsx';
// import Courses from './components/Courses';
// import Contact from './components/Contact';
import Navbar from './component/Navbar/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
