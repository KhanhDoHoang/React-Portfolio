import React from 'react';
import { StyledAbout } from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
//
import { useScroll } from "./useScroll";
import { fade } from "../pageAnimation";


const FaqSection = () => {
    const [element, controls] = useScroll();

    return (
        <StyledFaq variants={fade} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How do I start?'>
                    <div className="answer">
                        <p>It happended when I was 15 years old. When I had my first class in programming with Pascal.</p>
                        <p>I was so in love with problem solving, and that class became my favourite place I used to go to.
                        However, my family had a long history in law field, and that was what my dad expected me to be.
                        I was trying to doing the best to show them what I want to be not them,
                        and right now I am here, in second year of Computer Engineering major, on the way achieving my dream.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='What skillset do I offer?'>
                    <div className="answer">
                        <p>My main programming languages are Java/C/C++</p>
                        <p>Also, I am also trained with decent web development skills with PHP, Html, Css, JavaScript, and basic knowledge regarding Networking Programming.
                        You can check out my Github to know more about other projects that I don't post here for
                        another programming language such as Assembly or the newest project which is Compiler.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Time plays the important role in any succesfull result, that's the reason I love managing it properly.
                        I have my own notebook always along with me to check any activities or plans I have, besides, Trello
                        is one of my choice to manage most of my plans and projects.
                        </p>
                        <p>Daily, I spend my time priorly for finishing any assignments or homework as soon as possible to have more time to test, ask
                        my professor and double check, more than that for my projects and myself. There is a small project for blogging that I am currently working on
                        with my friends, we are both person that like writing daily note or dairy, and that idea just came up to us to make a small website that are able to store and update dairy or
                        just daily tasks.
                        </p>
                    </div>
                </Toggle>
                {/* <Toggle title='Different Payment Method'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et obcaecati distinctio nobis ex, voluptatem alias odio harum tempore illo.</p>
                    </div>
                </Toggle> */}
            </AnimateSharedLayout>
        </StyledFaq>

    )
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    /* min-height: 80vh; */
    span {
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`;

export default FaqSection;