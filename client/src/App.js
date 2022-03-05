import { Box } from "@material-ui/core";
import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Box style={{marginTop: 64}}>
      <Switch>
        {/* <Route exact path='/' component={home} /> */}
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/details/:id' component={DetailView} />
        <Route exact path='/create' component={CreateView} />
        <Route exact path='/update/:id' component={UpdateView} />
      </Switch>
      </Box>
    </BrowserRouter>
   </>
  );
}

export default App;
