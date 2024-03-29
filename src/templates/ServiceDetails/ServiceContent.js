import React, { Fragment } from "react";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import { Link } from "react-router-dom";

import ServicesData from "../../data/Services/service-one";


const ServiceContentWrap = ({ service }) => {
  return (
    <Fragment>

      <div className="col-md-9 col-sm-12 single_service_page_content">
        <img src={require("../../assets/images/" + service.singleThumb)} alt="service"/>
        <div className="single_service_title">
          <h3>{service.title}</h3>
          {<div dangerouslySetInnerHTML={{ __html: service.description }}/>}
        </div>
      </div>

      <Sidebar classes={"col-md-3 col-sm-12 single_service_side_bar"}>
        <SidebarItem classes="single_service_category">
          <List>
            {
              ServicesData.slice(0, 7).map((serviceItem, id) => (
                <LI key={id}><i className="fa fa-angle-right"></i>
                  <Link
                    to={`${`/service/${serviceItem.title.split(" ").join("-").toLowerCase()}?id=${serviceItem.id}`}`}>
                    {serviceItem.title}
                  </Link>
                </LI>
              ))
            }
          </List>
        </SidebarItem>
      </Sidebar>

    </Fragment>
  );
};

export default ServiceContentWrap;