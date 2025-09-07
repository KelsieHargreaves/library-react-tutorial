import React from "react";
import { faBoltLightning, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Why choose <span className="purple">Library</span></h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            img={faBoltLightning}
                            subtitle="Easy and Quick"
                            paragraph="Get access to the book you purchased online instantly."
                        />
                        <Highlight
                            img={faBookOpen}
                            subtitle="10,000+ Books"
                            paragraph="Library has books in all your favorite categories."
                        />
                        <Highlight
                            img={faTags}
                            subtitle="Affordable"
                            paragraph="Get your hands on popular books for as little as $10."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;