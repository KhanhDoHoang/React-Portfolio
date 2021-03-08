import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { projectState } from '../projectState';
import githublogo from "../img/github.png";
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../pageAnimation";
import ScrollTop from '../components/ScrollTop';


const ProjectDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(projectState);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
    }, [projects, url]);
    console.log(project);

    return (
        //Using bracket and {} to ask for the page only rendering if getting the data
        //If not so not showing error
        <>
            <ScrollTop />
            {project && (
                <StyledDetails
                    exit="exit"
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                >
                    <StyledHeadline>

                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <img src={project.mainImg} alt={project.title} />

                    </StyledHeadline>
                    <StyledLink>
                        <a href={project.linkGit}><img src={githublogo} alt={githublogo} /> </a>
                        <a href={project.linkPage}><b>Click for the website if available!!</b></a>
                    </StyledLink>
                    <StyledAwards>
                        {project.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </StyledAwards>
                    <ImageDisplay>
                        <img src={project.secondaryImg} alt={project.title} />
                        <p></p>
                    </ImageDisplay>
                </StyledDetails>
            )}
        </>
        // <StyledDetails>
        //     Hello
        //     <StyledHeadline>
        //         <h2>{project.title}</h2>
        //         <img src={project.mainImg} alt={project.title} />
        //     </StyledHeadline>
        // </StyledDetails>
    )
}

const StyledLink = styled(motion.div)`
    min-height: 15vh;
    margin: 5rem 10rem -5rem;
    align-items: center;
    justify-content: space-around;
    justify-content: center;

    display: flex;
    
    @media (max-width: 1350px){
        justify-content: center;
        flex-wrap: wrap;
    }

    a {
        margin-top: -15%;
        color: white;
        text-decoration: none;
        :hover{
            color: grey;
        }
    }
    img {
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
        left: 50%;
        :hover{
            background-color: grey;
        }
    }
    
`;



const StyledDetails = styled(motion.div)`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    font-family: 'Potta One', cursive;
    p {
        left: 10%;
        text-align: center;
    }
    h2 {
        position: relative;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        margin: -5% 0 4% 0;
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-widht: 1500px){
        h2 {
            font-size: 60%;
            margin-top: -10%;
        }
        img {
            object-fit: contain;
        }
    }
    
`;
const StyledAwards = styled.div`
    min-height: 80vh;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;


    display: flex;
    
    p {
        font-size: 20px;
    }
    @media (max-width: 1300px){
        justify-content: center;
        flex-wrap: wrap;

    }
`;

const AwardsStyle = styled.div`
    padding: 1.5rem;
    h3{
        font-size: 2rem;
    }
    .line {
        width: 80%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }
    p{
       padding: 3rem 0; 
    }
    @media (max-width: 1500px){
       display: block;
       margin: 2rem 2rem;
    }

`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    p{
        justify-content: center;
        text-align: center;
    }
    @media (max-width: 1500px){
       img{
           object-fit: contain;
       }
    }
    
`;

//Awards Comp
const Award = ({ title, description }) => {
    return (
        <AwardsStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardsStyle>
    )
}


export default ProjectDetails;