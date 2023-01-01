import React from "react";
import Blog from "../ui/Blog";

function Blogs() {
    return (
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-3 sm:px-19.44 px-5 py-6.25">
            <Blog
                title="Kereis and Sopra Steria support French fintech Particeep in new stage of its development"
                date="Dec 13, 2022"
                body="Kereis today announces that it is taking a majority stake in Particeep, a French fintech and Insurtech founded in 2013 that gives banks, insurers and brokers white label turnkey solutions that enable the digital distribution of financial, insurance and savings products."
                image='/images/towels.jpg'
            />
            <Blog
                title="Sopra Steria recognised as a Leader in End-to-end Cloud Infrastructure Management Services by global analyst firm NelsonHall"
                body="Sopra Steria leverages its “Digital and Cloud Center of Excellence” to bring both vertical and technology expertise."
                image='/images/hand.jpg'
            />
            <Blog
                body="This agreement was entered into following the launch of exclusive negotiations announced on 28 July 2022 and procedures for informing and consulting with Sopra Steria’s and CS Group’s respective employee representative bodies."
                title="Sopra Steria: Proposed acquisition of CS Group - Sopra Steria signs agreement to acquire main block of CS Group’s share capital"
                image='/images/bridge.jpg'
            />
        </div>
    );
}

export default Blogs;
