import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-one";
import Skill from "../components/Skill";
import Team from "../components/Team/home-two";


const Aboutpage = () => {

  return (
    <Fragment>
      <MetaTags>
        <title>Mixden Tours and Travel | About</title>
        <meta
          name="description"
          content="Global Digital Centre | About Page"
        />
      </MetaTags>

      <LayoutOne>

        <PageHeader
          bgImg={require("../assets/images/page_bg.jpg")}
          title="About Us"
        />

        <About/>
        <Skill/>
        <Team/>

      </LayoutOne>
    </Fragment>

  );
};

export default Aboutpage;   