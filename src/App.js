import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "./modules/Layout";
import Navigation from "./modules/Navigation";
import IntroSection from "./modules/IntroSection";
import Introduction from "./modules/Introduction";
import About from "./modules/About";
import Features from "./modules/Features";
import Reasons from "./modules/Reasons";
import EasyToUse from "./modules/EasyToUse";
import GoToApit from "./modules/GoToApi";
import Miners from "./modules/Miners";
import SocialLinks from "./modules/SocialLinks";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <IntroSection />
          <Introduction />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <About />
        </ScrollAnimation>
        <Features />
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Reasons />
        </ScrollAnimation>
      </Layout>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <EasyToUse />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <GoToApit />
      </ScrollAnimation>
      <Layout>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Miners />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <SocialLinks />
        </ScrollAnimation>
      </Layout>
      <Navigation background="true" />
    </BrowserRouter>
  );
};

export default App;
