import { Box } from "@material-ui/core";
import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";
// auth modules
import Signup from "./components/signup";
import Login from "./components/login";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import DetailView from "./components/post/DetailView";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";
import Projects from "./components/projects/Projects";

function App() {

  const user = localStorage.getItem("token");

  // const location = useLocation();

  // const [search, setSearch] = useState("");
  // console.log(search);

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Box style={{marginTop: 64}}>
    <Routes>
			<Route path="/home" exact element={<Home />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{!user ? <Route path="/" element={<Navigate replace to="/login" />} />
             : <Route path="/" element={<Navigate replace to="/home" />} />
      }

        {/* <Route exact path='/about' component={About} /> */}
        {/* <Route exact path='/contact' component={Contact} /> */}
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/projects/create' element={<CreateView />} />
        <Route exact path='/projects/details/:id' element={<DetailView />} />
        {/* <Route exact path={`${/projects/}details/:id`} element={<DetailView />} /> */}
        <Route exact path='/projects/update/:id' element={<UpdateView />} />
      </Routes>
      </Box>
    </BrowserRouter>
   </>
  );
}

export default App;
