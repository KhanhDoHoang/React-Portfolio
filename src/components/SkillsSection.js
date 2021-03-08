import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/mainhome2.jpg';
import { StyledAbout, StyledDescription, StyledImage } from '../styles';
import styled from 'styled-components';
//
import { useScroll } from "./useScroll";
import { fade } from "../pageAnimation";

const SkillsSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledServices variants={fade} animate={controls} initial="hidden" ref={element}>
            <StyledDescription>
                <h2>Hi <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Able to work in any deadline-driven as well as fast-paced environment </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Ability to interact, communicate and present ideas.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="Open-minded" />
                            <h3>Open-minded</h3>
                        </div>
                        <p>Always open to listen and learn from any critical comment or judgment. </p>
                    </Card>
                    {/* <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card> */}
                </Cards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="home2" />
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0 4rem 0;
    }

`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    p {
        font-size: 20px;
    }
    @media (max-width: 1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 15rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: #f7f5ef;
            color: black;
            padding: 1rem;
            border-radius: 10%; 
        }
    }
`;

export default SkillsSection;