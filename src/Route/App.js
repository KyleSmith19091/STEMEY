import { useState } from "react";

// Components
import Header from "../Component/Header";
import SlideDrawer from "../Component/SlideDrawer";

// Sections
import HeroSection from "../Component/HeroSection";
import MissionSection from "../Component/MissionSection";
import OfferSection from "../Component/OfferSection";

// CSS
import '../Style/Route/App.css';

const App = () => {

  // Keep track of the drawer on *Mobile*
  const [open, setOpen] = useState(false);

  return (
    <div className="App">

      <Header open={open} setOpen={setOpen} />
      {/* Rendered on media query breakpoint ==> See slide drawer css file for details */}
      <SlideDrawer open={open} />
      <HeroSection open={open} />
      <MissionSection />
      <OfferSection />

    </div>
  );
}

export default App;
