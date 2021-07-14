import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import GalleryDetails from "../templates/GalleryDetails/index";

const galleryPage = () => {
	return (
		<Fragment>
			<MetaTags>
				<title>Mixden Tours and Travel | SinglePortfolio</title>
				<meta
					name="description"
					content="Global Digital Centre | Portfolio Page"
				/>
			</MetaTags>
			<LayoutOne>

				<GalleryDetails/>

			</LayoutOne>
		</Fragment>
	);
};

export default galleryPage;



