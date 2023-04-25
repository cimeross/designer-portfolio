// eslint-disable-next-line no-unused-vars
import React from "react";

import { TbArrowBigRightLines } from "react-icons/tb";
import { BiChevronsDown } from "react-icons/bi";
import "./home.scss";

const Home = () => {
	return (
		<section id="home" className="home section">
			<div className="container homeContainer">
				<span className="introText">Hi, my name is</span>
				<h1 className="title">Jelena Suvajac</h1>
				<span className="subTitle">
					<span className="frontendDeveloper">Graphic Designer</span>.
				</span>
				<p className="homeParagraph">
					Every great design begins with an even better story.
				</p>
				<div className="lowerHomeSection">
					<button className="contactBtn">
						<a href="#contact" className="flex">
							Contact me <TbArrowBigRightLines className="icon" />
						</a>
					</button>
					<div className="scrollDiv">
						<a href="#about" className="flex">
							<h6 className="scroll">Scroll Down</h6>
							<BiChevronsDown className="icon" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
