// React
import React from "react";

// External Components
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles"
import { Switch, Route } from "react-router-dom";

// Internal Routes
import Home from "./Home";
import PageNotFound from "./PageNotFound";

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
  return (
    <Switch>
      <ThemeProvider theme={appComponentTheme}>
        <main className="App">
          <Route path='/' component={Home} exact />
          <Route component={PageNotFound} />
        </main>
      </ThemeProvider>
    </Switch>
  );
}

export default App;
