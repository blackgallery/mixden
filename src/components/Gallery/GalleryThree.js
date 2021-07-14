import React from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import GalleryData from "../../data/Gallery/gallery";

const GalleryContent = () => {

    return (
      <section className="work-section work_section_v3">
          <div className="container">
              {/* Heading */}
              <div className="base-header">
                  <h3><span className="light">Enjoy the versatility of</span> <span
                    className="drak">GDC's Portfolios</span>
                  </h3>
                  <p>Our Portfolios are versatile with modern creative design. They are Made with an ultimate
                      toolbox of design elements, styles, features &amp; technology. Therefore, Enhancing your
                      Business Identity. </p>
              </div>
              {/* End: Heading */}

              <div className="projects-list">

                  <Tab.Container defaultActiveKey="all">
                      <Nav variant="pills" className="acount__nav justify-content-center nav nav-pills">
                          <Nav.Item>
                              <Nav.Link eventKey="all">all projects</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                              <Nav.Link eventKey="office">Graphic</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                              <Nav.Link eventKey="pool">Development</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                              <Nav.Link eventKey="carpet">Digital</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                              <Nav.Link eventKey="house">Communication</Nav.Link>
                          </Nav.Item>
                      </Nav>

                      <Tab.Content>
                          <Tab.Pane eventKey="all">

                              {
                                  GalleryData.reverse().slice(0, 8).map((gallery, i) => (
                                    <div className="col-md-4 col-sm-12" key={i}>
                                        <div className="single-project-item" style={{
                                            backgroundImage: `url(${require("../../assets/images/" + gallery.thumb)})`
                                        }}>
                                            <div className="project-hover">
                                                <h4><Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link>
                                                </h4>
                                                <span>{gallery.tag}</span>
                                                <Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}
                                                  className="project-link"><i
                                                  className="icon_link"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                  ))
                              }

                          </Tab.Pane>


                          <Tab.Pane eventKey="office">
                              {
                                  GalleryData.reverse().slice(0, 4).map((gallery, i) => (
                                    <div className="col-md-4 col-sm-12" key={i}>
                                        <div className="single-project-item" style={{
                                            backgroundImage: `url(${require("../../assets/images/" + gallery.thumb)})`
                                        }}>
                                            <div className="project-hover">
                                                <h4><Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link>
                                                </h4>
                                                <span>{gallery.tag}</span>
                                                <Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}
                                                  className="project-link"><i className="icon_link"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                  ))
                              }
                          </Tab.Pane>

                          <Tab.Pane eventKey="house">
                              {
                                  GalleryData.reverse().slice(0, 6).map((gallery, i) => (
                                    <div className="col-md-4 col-sm-12" key={i}>
                                        <div className="single-project-item" style={{
                                            backgroundImage: `url(${require("../../assets/images/" + gallery.thumb)})`
                                        }}>
                                            <div className="project-hover">
                                                <h4><Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link>
                                                </h4>
                                                <span>{gallery.tag}</span>
                                                <Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}
                                                  className="project-link"><i className="icon_link"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                  ))
                              }
                          </Tab.Pane>

                          <Tab.Pane eventKey="carpet">
                              {
                                  GalleryData.reverse().slice(0, 8).map((gallery, i) => (
                                    <div className="col-md-4 col-sm-12" key={i}>
                                        <div className="single-project-item" style={{
                                            backgroundImage: `url(${require("../../assets/images/" + gallery.thumb)})`
                                        }}>
                                            <div className="project-hover">
                                                <h4><Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link>
                                                </h4>
                                                <span>{gallery.tag}</span>
                                                <Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}
                                                  className="project-link"><i className="icon_link"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                  ))
                              }
                          </Tab.Pane>

                          <Tab.Pane eventKey="pool">
                              {
                                  GalleryData.reverse().slice(0, 4).map((gallery, i) => (
                                    <div className="col-md-4 col-sm-12" key={i}>
                                        <div className="single-project-item" style={{
                                            backgroundImage: `url(${require("../../assets/images/" + gallery.thumb)})`
                                        }}>
                                            <div className="project-hover">
                                                <h4><Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link>
                                                </h4>
                                                <span>{gallery.tag}</span>
                                                <Link
                                                  to={`${`/gallery/${gallery.title.split(" ").join("-").toLowerCase()}?id=${gallery.id} `}`}
                                                  className="project-link"><i className="icon_link"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                  ))
                              }
                          </Tab.Pane>


                      </Tab.Content>

                  </Tab.Container>

              </div>
          </div>
      </section>

    );
};


export default GalleryContent;


