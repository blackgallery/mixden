import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import ServiceDetails from "../templates/ServiceDetails/index";

const servicePage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>Mixden Tours and Travel | Services</title>
				<meta
					name="description"
					content="Global Digital Centre | services Page"
				/>
			</MetaTags>

			<LayoutOne>

				<ServiceDetails/>

			</LayoutOne>
		</Fragment>
	);
};

export default servicePage;



