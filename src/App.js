import React from "react";
//Import pages
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import Nav from './components/Nav';
import ProjectDetails from './pages/ProjectDetails';
//Global Style
import GlobalStyled from './components/GlobalStyled';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Scroll Top
import ScrollTop from './components/ScrollTop';

function App() {
  //Using this to let the browser knows that we're on different location 
  //Different page: contact -> mywork
  const location = useLocation();

  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyled />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/work" component={MyWork} />
          <Route path="/work/:id" component={ProjectDetails} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}


// function App() {
//   const location = useLocation();

//   return (
//     <div className="App">
//       <GlobalStyled />
//       <ScrollTop />

//       <Nav />
//       <AnimatePresence exitBeforeEnter>
//         <Switch location={location} key={location.pathname}>
//           <Route path="/" exact>
//             <AboutUs />
//           </Route>
//           <Route path="/work" exact>
//             <MyWork />
//           </Route>
//           <Route path="/work/:id">
//             <ProjectDetails />
//           </Route>
//           <Route path="/contact">
//             <ContactMe />
//           </Route>
//         </Switch>
//       </AnimatePresence>
//     </div>
//   );
// }

export default App;
