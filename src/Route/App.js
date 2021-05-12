import React, { useState } from "react";

// External Components
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles"

// Internal Components
import Header from "../Component/Header";
import SlideDrawer from "../Component/SlideDrawer";
import Footer from "../Component/Footer";

// Sections
import HeroSection from "../Component/HeroSection";
import MissionSection from "../Component/MissionSection";
import OfferSection from "../Component/OfferSection";
import ImpactSection from "../Component/ImpactSection";
import TestimonialSection from "../Component/TestimonialSection";
import AnnoucementSection from "../Component/AnnoucementSection";

// CSS
import '../Style/Route/App.css';

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

  // Keep track of the drawer on *Mobile*
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={appComponentTheme}>
      <div className="App">

        <Header open={open} setOpen={setOpen} />
        {/* Rendered on media query breakpoint ==> See slide drawer css file for details */}
        <SlideDrawer open={open} />
        <HeroSection open={open} />
        <MissionSection />
        <OfferSection />
        <ImpactSection />
        <TestimonialSection />
        <AnnoucementSection />
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;
