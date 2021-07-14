import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from "../components/PageHeader";
import Team from "../components/Team/home-two";


const TeamPage = () => {

  return (
    <Fragment>
      <MetaTags>
        <title>Mixden Tours and Travel | Team</title>
        <meta
          name="description"
          content="Global Digital Centre | Team Page"
        />
      </MetaTags>

      <LayoutOne>

        <PageHeader
          bgImg={require("../assets/images/page_bg.jpg")}
          title="Our Experts"
        />

        <section className={`team_section team_page`}>
          <div className="container">
            {/* Heading */}
            {/*<SectionTitle
                            title="Meet the team"
                        />*/}
            {/* End: Heading */}

            <Team/>


            {/*<div className="row">

                            {
                                teamData.slice(0,8).map(team=>(
                                    <TeamList
                                        key={team.id}  
                                        img={team.img}
                                        name={team.name}
                                        designation={team.designation}
                                        facebookUrl={team.facebookUrl} 
                                        twitterUrl={team.twitterUrl} 
                                        linkedinUrl={team.linkedinUrl} 
                                    />
                                ))
                            }
            
                        </div>*/}

          </div>
        </section>

      </LayoutOne>
    </Fragment>

  );
};

export default TeamPage;   