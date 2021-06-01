// React
import React, { useState } from "react";

// External Components
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Internal Routes
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import TutoringSummer from "./TutoringSummer";
import Classes from "./Classes";
import Tutoring from "./Tutoring";
import Test from "./Test";
import STEMWorld from "./StemWorld";

// Internal Components
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SlideDrawer from "../Component/SlideDrawer";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <main className="App">
        <Header open={open} setOpen={setOpen} />
        <SlideDrawer open={open} />
        <Switch>
          <Route path='/' component={() => <Home open={open} />} exact />

          <Route path='/tutoring-summer' component={TutoringSummer} />

          <Route path='/classes' component={Classes} />

          <Route path='/tutoring' component={Tutoring} />

          <Route path='/test' component={Test} />

          <Route path='/stemworld' component={STEMWorld} />

          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;