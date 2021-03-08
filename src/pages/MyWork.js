import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import register1 from "../img/StudentRegister1.PNG";
import tracker1 from "../img/Covid-Tracker1.PNG";
import musicApp1 from "../img/Music1.PNG";
import inventory1 from "../img/SaleInventory1.jpg";
import lithophane1 from "../img/Lithophane1.png";
import summer1 from "../img/SummerHack1.jpg";
//Animations
import { motion } from 'framer-motion';
import { slidingIn, sliderContainer, slider, pageAnimation, fade, photoAnimation, lineAnimation } from "../pageAnimation";
import { useScroll } from "../components/useScroll";
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    const [element5, controls5] = useScroll();
    const [element6, controls6] = useScroll();
    //element always goes first controls

    return (
        <Work
            style={{ background: "#fff" }}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <ScrollTop />
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Project ref={element3} variants={fade} animate={controls3} initial="hidden">
                <motion.h2 variants={fade}>Student Register</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/student-register-project">
                    <Hide>
                        <motion.img variants={photoAnimation} src={register1} alt="Athlete" />
                    </Hide>
                </Link>
            </Project>

            <Hide>
                <Project ref={element} variants={fade} animate={controls} initial="hidden">
                    <h2>The Covid-19 Tracker</h2>
                    <motion.div variants={lineAnimation} className="line"></motion.div>
                    <Link to="/work/the-covid-19-tracker">
                        <img src={tracker1} alt="theracer" />
                    </Link>
                </Project>
            </Hide>

            <Project
                ref={element2}
                variants={fade}
                animate={controls2}
                initial="hidden"
            >
                <h2>The Wave Music Application (Learning Project)</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="./work/the-music-application">
                    <img src={musicApp1} alt="goodtimes" />
                </Link>
            </Project>

            <Project
                ref={element4}
                variants={fade}
                animate={controls4}
                initial="hidden"
            >
                <h2>Sales Inventory</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="./work/sales-inventory">
                    <img src={inventory1} alt="goodtimes" />
                </Link>
            </Project>

            <Project
                ref={element5}
                variants={fade}
                animate={controls5}
                initial="hidden"
            >
                <h2>3D Lithophane Printing</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="./work/3d-lithophane-printing">
                    <img src={lithophane1} alt="goodtimes" />
                </Link>
            </Project>

            <Project
                ref={element6}
                variants={fade}
                animate={controls6}
                initial="hidden"
            >
                <h2>Summer Hack</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="./work/summer-hack">
                    <img src={summer1} alt="goodtimes" />
                </Link>
            </Project>
        </Work>


    )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    overflow: hidden;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1500px){
      img{
          object-fit: contain;
      }
  }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index:2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;



export default MyWork;