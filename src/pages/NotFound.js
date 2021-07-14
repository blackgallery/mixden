import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutOne from "../layouts/LayoutOne";


const NotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Global Digital Centre | 404</title>
        <meta
          name="description"
          content="Global Digital Centre | 404 Page"
        />
      </MetaTags>

      <LayoutOne>
        <div className="errorPage" style={{ backgroundImage: `url(${"/assets/images/slider1.jpg"})` }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-right">
                <h2>OOPS!</h2>
                <span>404 - PAGE NOT FOUND</span>
                <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                <Link className="more-link" to={"/"}>
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>

      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
