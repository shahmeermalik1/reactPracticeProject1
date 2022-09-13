import React from "react";
import './index.css'
import Navbar1 from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./components/pages/Home";
import Footer1 from "./components/Footer";
import About from "./components/pages/About";
import Notfound from "./components/pages/Notfound";
import UserResults from "./components/users/UserResults";
import {FinderProvider} from "./context/FinderContext";
import Search from "./components/pages/Search";






function App() {
  return (
    <FinderProvider>
    <Router>
        <Navbar1 />
        <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Notfound/>} />
        <Route path="/*" element={<Notfound/>} />
        </Routes>
      <Footer1 />
   </Router>
    </FinderProvider>
   
  );
}

export default App;
