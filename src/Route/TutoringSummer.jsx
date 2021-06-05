// React
import React from 'react';

// Internal Components
import STEMPowermentSection from "../Component/STEMPowermentSection";

// External Components
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

// CSS
import "../Style/Route/TutoringSummer.css";

const TutoringSummer = () => {

    return (
        <main className="tutoring-summer">
            <h1 className="tutoring-header"><span className="header-icon" role="img" aria-label="lightning-bolt">⚡️ </span><span>STEM</span>Powerment</h1>
            <div className="tab-container">
                <Tabs isFitted variant="soft-rounded" colorScheme="purple" >
                    <TabList>
                        <Tab sx={{ textDecoration: "underline", margin: "0 1em" }} _focus={{ ringColor: "transparent" }} _hover={{ transform: "scale(1.05)" }}>Description</Tab>
                        <Tab sx={{ textDecoration: "underline" }} _focus={{ ringColor: "transparent" }} _hover={{ transform: "scale(1.05)" }}>Register</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <STEMPowermentSection />
                        </TabPanel>
                        <TabPanel>
                            <iframe className="form" title="Tutoring Form" src="https://docs.google.com/forms/d/e/1FAIpQLScqG5-L8qjwcM_JkKjC7N2VpzNuzQ1pBw_fpY2bjq2P1zfg3Q/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </main>
    )
}

export default TutoringSummer
