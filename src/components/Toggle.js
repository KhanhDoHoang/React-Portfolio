import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import styled from 'styled-components';

const Toggel = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            {/* Need to have layout for parents and children to avoid the stretching effects */}
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggel;