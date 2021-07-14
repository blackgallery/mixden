import React from "react";
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";
// About Image
import aboutImg from "../../../assets/images/mixden.gif";

const AboutContent = () => {

    return (

      <section className="about-section" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 col-sm-12 about_bottom_warp">
                      <div className="about_list">
                          {/* Start: Heading */}
                          <SectionTitle
                            title=" Welcome to Mixden"
                          />
                          <p>Mixden tours and travel agency that markets established companies, new brands and
                              startups to consumers.
                              Through our experienced team and cutting edge technology, we craft brand experiences and
                              stories that engage a client’s audience at every touch point, locally, regionally and
                              worldwide </p>
                      </div>

                      <div className="row about_list_warp">

                          {/*Start:   About List */}
                          {AboutData.map(about => (
                            <AboutList
                              key={about.id}
                              title={about.title}
                              text={about.text}
                              icon={about.icon}
                            />
                          ))}
                          {/*End:  About List*/}

                      </div>
                  </div>

                  {  /*Start: About Image  */}
                  <div className="col-md-6 col-sm-12">

                      { /*  About Right Image  */}
                      <img src={aboutImg} alt=""/>

                  </div>
                  {/*End: About Image  */}


              </div>
              {/* row */}
          </div>
          {/* container */}
      </section>


    );
};

export default AboutContent;
