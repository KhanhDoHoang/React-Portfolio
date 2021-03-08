//Styled components
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: pink;

    @media (max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`;

export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }

    @media (max-width: 1300px){
        padding: 0;
        button {
            margin: 2rem 0 5rem 0;
        }
    }
`;

export const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
        border-radius: 5%;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

// import {About, Hide, }