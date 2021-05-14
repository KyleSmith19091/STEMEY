// React
import React, { useState } from 'react'

// Internal Components
import TabPanel from "../Component/TabPanel";
import STEMPowermentSection from "../Component/STEMPowermentSection";

// External Components
import { Tabs, Tab } from '@material-ui/core';

// CSS
import "../Style/Route/TutoringSummer.css";

const TutoringSummer = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main className="tutoring-summer">
            <h1 className="tutoring-header"><span role="img" aria-label="lightning-bolt">⚡️ </span><span>STEM</span>Powerment</h1>
            <div className="tab-container">
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="STEMPowerment Tutoring Summer Program"
                    variant="fullWidth"
                >
                    <Tab label="Overview" />
                    <Tab label="Register" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <STEMPowermentSection />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <iframe class="form" title="Tutoring Form" src="https://docs.google.com/forms/d/e/1FAIpQLScqG5-L8qjwcM_JkKjC7N2VpzNuzQ1pBw_fpY2bjq2P1zfg3Q/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </TabPanel>
            </div>
        </main>
    )
}

export default TutoringSummer
