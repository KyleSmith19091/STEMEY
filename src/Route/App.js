// React
import React, { useState } from "react";

// External Components
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles"
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Internal Routes
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import TutoringSummer from "./TutoringSummer";
import Classes from "./Classes";
import Tutoring from "./Tutoring";

// Internal Components
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SlideDrawer from "../Component/SlideDrawer";

// App Component Theme
const appComponentTheme = createMuiTheme({
  palette: {
    primary: { main: "#7230E9" }
  },
  typography: {
    textField: {
      fontFamily: '"Poppins", "Helvetica Neue"',
    },
    button: {
      fontFamily: '"Poppins", "Helvetica Neue"',
    },
  },
});

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={appComponentTheme}>
        <main className="App">
          <Header open={open} setOpen={setOpen} />
          <SlideDrawer open={open} />
          <Switch>
            <Route path='/' component={Home} exact />

            <Route path='/tutoring-summer' component={TutoringSummer} />

            <Route path='/classes' component={Classes} />

            <Route path='/tutoring' component={Tutoring} />

            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;