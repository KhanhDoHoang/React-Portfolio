import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Hoang Do Portfolio
          </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "20%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work">2. My Projects</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "20%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">3. Contact</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "20%" : "0%" }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo{
        font-family: "Lobster", sans-serif;
        font-size: 1.7rem;
        font-weight: lighter;
    }
    li {
        padding-left: 5rem;
        position: relative;
    }

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem 0rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;


export default Nav;