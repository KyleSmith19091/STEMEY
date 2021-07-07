// React
import React from "react";

// External Components
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Internal Routes
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import TutoringSummer from "./TutoringSummer";
import Classes from "./Classes";
import Tutoring from "./Tutoring";
import Test from "./Test";
import STEMWorld from "./StemWorld";
import STEMWorldII from "./StemWorld2";
import Form from "./Form";

// Internal Components
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import ScrollToTop from "../Component/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="App">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path='/' component={Home} exact />

            <Route path='/tutoring-summer' component={TutoringSummer} />

            <Route path='/classes' component={Classes} />

            <Route path='/tutoring' component={Tutoring} />

            <Route path='/test' component={Test} />

            <Route path='/stemworld' component={STEMWorld} />

            <Route path='/stemworld2' component={STEMWorldII} />

            <Route path='/form' component={Form} />

            <Route component={PageNotFound} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;