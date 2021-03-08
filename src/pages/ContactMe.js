import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from "../pageAnimation";
import styled from "styled-components";
import ScrollTop from '../components/ScrollTop';

const ContactMe = () => {
    return (

        <ContactStyle
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{ background: "#fff" }}>
            <ScrollTop />
            <Title>
                <Hide>

                    <motion.h2
                        variants={titleAnimation}
                    >
                        <MainTitle>
                            Get In Touch
                        </MainTitle>
                    </motion.h2>

                </Hide>
            </Title>
            <div>
                {/* <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2><a href="/Resume.pdf" download>Download my resume</a></h2>
                    </Social>
                </Hide> */}
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2><a href="mailto: do000075@algonquinlive.com">Send Me An Email</a></h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2><a href="https://www.linkedin.com/in/khanhdohoang/">LinkedIn</a></h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled(motion.div)`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px){
        margin-top: 5rem
    }
`;

const Hide = styled.div`
    overflow: hidden;
    
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #353535;
    /* @media (max-width: 1300px){
        width: 1.8rem;
        height: 1.8rem;
    } */
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2, a{
        font-size: 2.6rem;
        font-weight: 400;
        margin: 2rem;
        text-decoration: none;
        color: black;
        font-family: 'Inter', sans-serif;
        :hover{
            color: grey;
        }
    }
    /* @media (max-width: 1300px){
        h2{
            font-size: 2rem;
        }
    } */
`;

const MainTitle = styled.div`
    font-weight: 500;
    /* font-family: 'Potta One', cursive; */
    font-family: 'Lobster', sans-serif;

`

export default ContactMe;