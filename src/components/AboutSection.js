import React from 'react';
import home1 from "../img/mainhome1.jpg";
import { Link } from 'react-router-dom';

//Import styled
// import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, Hide } from '../styles';
//Framer motion
import { motion } from 'framer-motion';

import { titleAnimation, fade, photoAnimation } from "../pageAnimation";
import Wave from './Wave';
//
import { useScroll } from "./useScroll";

const AboutSection = () => {
    // const [element, controls] = useScroll();
    // const containerFramer = {
    //     // hidden: { x: 300 },
    //     // show: { x: 0, transition: { delay: 0, x: { type: "spring", stiffness: 100 }, default: { duration: 2 } }, staggerChildren: 1, when: "afterChildren" },
    //     hidden: { x: 100 },
    //     show: {
    //         ease: "easeOut",
    //         x: 0,
    //         type: "spring",
    //         transition: {
    //             duration: 1.5,
    //             staggerChildren: 0.5,
    //         },
    //         when: "afterChildren",
    //     }
    // };

    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            Hello, I am
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            <span> Hoang Do</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            Welcome to my site.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}

                >
                    Driven with passion of creating and innovating with new ideas, I am currently seeking for a Co-op position within Technology field
                </motion.p>

                <Link to="/contact">
                    <motion.button variants={fade}>
                        Contact me
                </motion.button>

                </Link>

            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnimation} src={home1} alt="guy with a camera" />
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}



export default AboutSection;