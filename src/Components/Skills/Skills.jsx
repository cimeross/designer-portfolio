// eslint-disable-next-line no-unused-vars
import React from "react";
import "./skils.scss";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const Skills = () => {
	return (
		<section id="skills" className="skills container section">
			<div className="sectionTitle">
				<h5 className="titleText">
					Skills
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>
			<div className="skillsContainer grid">
				<div className="skillGroup">
					<div className="groupTitle">
						<h2 className="title">Graphic & UX / UI design</h2>
						<span className="subtitle"></span>
					</div>
					<div className="generalSkills">
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiAdobeillustrator className="icon" />
							</div>
							<span className="skillName">Adobe Illustrator</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiAdobephotoshop className="icon" />
							</div>
							<span className="skillName">Adobe Photoshop</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiAdobeindesign className="icon" />
							</div>
							<span className="skillName">Adobe InDesign</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<SiAdobexd className="icon" />
							</div>
							<span className="skillName">Adobe XD</span>
						</div>
						<div className="singleSkill">
							<div className="iconBox flex">
								<CgFigma className="icon" />
							</div>
							<span className="skillName">Figma</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
