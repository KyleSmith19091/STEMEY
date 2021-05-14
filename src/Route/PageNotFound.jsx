// React
import React from 'react';

// Internal Components
import Header from '../Component/Header';
import Footer from "../Component/Footer";
import HoverCard from "../Component/HoverCard";

// Images
import { ReactComponent as Error } from "../Img/SVG/error_404.svg";

// CSS
import "../Style/Route/PageNotFound.css";

const PageNotFound = () => {
    return (
        <main className="page-not-found">
            <Header />
            <section className="content">
                <h1>Woops Page Not Found!</h1>
                <h3>Might as well check this guy out <span role="img" aria-label="hand-down">👇</span></h3>
                <HoverCard>
                    <Error className="error-img" />
                </HoverCard>
            </section>
            <Footer />
        </main >
    )
}

export default PageNotFound
