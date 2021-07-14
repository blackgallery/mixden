import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Gallery from "../components/Gallery/GalleryTwo";
import PageHeader from "../components/PageHeader";

const galleryPage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>Mixden Tours and Travel | Portfolio</title>
				<meta
					name="description"
					content="Global Digital Centre | Portfolio Page"
				/>
			</MetaTags>

			<LayoutOne>
				<PageHeader
					bgImg={require("../assets/images/page_bg.jpg")}
					title="Our Portfolios"
				/>

				<Gallery classes="work_page"/>

			</LayoutOne>
		</Fragment>
	);
};

export default galleryPage;



