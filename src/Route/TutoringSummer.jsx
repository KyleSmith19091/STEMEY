// React
import React, { useState } from 'react'

// Internal Components
import TabPanel from "../Component/TabPanel";

// External Components
import { Tabs, Tab } from '@material-ui/core';

// CSS
import "../Style/Route/TutoringSummer.css";

const TutoringSummer = () => {
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main className="tutoring-summer">
            <h1 className="tutoring-header"><span role="img" aria-label="hand-down">⚡️ </span><span>STEM</span>Powerment</h1>
            <div className="tab-container">
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Overview" />
                    <Tab label="Register" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScqG5-L8qjwcM_JkKjC7N2VpzNuzQ1pBw_fpY2bjq2P1zfg3Q/viewform?embedded=true" width="640" height="4035" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </TabPanel>
            </div>
        </main>
    )
}

export default TutoringSummer
