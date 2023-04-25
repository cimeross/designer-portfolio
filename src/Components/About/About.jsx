// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.scss";
import { GrDocumentDownload } from "react-icons/gr";

import pdfFile from "../../assets/MilanSuvajac_cv.pdf";

const About = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = pdfFile;
		link.download = "MilanSuvajac_cv.pdf";
		link.click();
	};

	return (
		<section id="about" className="about section container">
			<div className="sectionTitle">
				<h5 className="titleText">
					About Me
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>
			<div className="sectionContent grid">
				<div className="textSection">
					<p>
						Preparing your Dreams with brush. Every artist dips his brush in his
						own soul, and paints his own nature into his pictures.
					</p>
					<h4>
						My journey as a graphic designer started with my fascination for the
						power of visual communication. I found myself drawn towards creating
						designs that not only looked great but also conveyed a message
						effectively. I started working as a freelancer while pursuing my
						degree in graphic design, and the experience of working with clients
						from different industries gave me a better understanding of the
						practical application of design principles. As I delve deeper into
						the field, my focus has shifted towards the dynamic and exciting
						realm of UX/UI design.
					</h4>
					<div className="aboutBtn">
						<a onClick={handleDownload} href="#" className="flex">
							Download CV <GrDocumentDownload className="icon" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
