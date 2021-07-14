import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
import Service from "./pages/Service";
import SingleService from "./pages/SingleService";
import Gallery from "./pages/Gallery";
import SingleGallery from "./pages/SingleGallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SingleBlog from "./pages/SingleBlog";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${"/"}`}
            component={Home}
          />
          <Route
            path={`${"/home"}`}
            component={Home}
          />
          {/*  <Route
              path={`${"/home-two"}`}
              component={HomeTwo}
          />
          <Route
              path={`${"/home-three"}`}
              component={HomeThree}
          />
          <Route
              path={`${"/landingpage-one"}`}
              component={LandingPageOne}
          />
          <Route
              path={`${"/landingpage-two"}`}
              component={LandingPageTwo}
          />*/}
          <Route
            path={`${"/about"}`}
            component={About}
          />
          <Route exact path={`${"/service"}`}
                 component={Service}
          />
          <Route path={`${"/service/:serviceIDD"}`}
                 component={SingleService}
          />
          <Route path={`${"/gallery/:galleryID"}`}
                 component={SingleGallery}
          />
          <Route path={`${"/blog/:blogID"}`}
                 component={SingleBlog}
          />
          <Route
            path={`${"/gallery"}`}
            component={Gallery}
          />
          <Route
            path={`${"/contact"}`}
            component={Contact}
          />
          <Route
            path={`${"/team"}`}
            component={Team}
          />
          <Route
            path={`${"/blog"}`}
            component={Blog}
          />
          <Route exact component={NotFound}/>

        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
