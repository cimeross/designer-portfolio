// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Logo from "../../assets/Logo_Original_White.png";
import pdfFile from "../../assets/Jelena Suvajac.pdf";

const Navbar = () => {
	const [active, setActive] = useState("navBar");
	const [activeHeader, setActiveHeader] = useState("header");
	const showNavBar = () => {
		setActive("navBar activeNavbar");
	};
	const removeNavBar = () => {
		setActive("navBar");
	};
	useEffect(() => {
		const addBg = () => {
			if (window.scrollY >= 10) {
				setActiveHeader("header activeHeader");
			} else {
				setActiveHeader("header");
			}
		};

		addBg();
		window.addEventListener("scroll", addBg);

		return () => {
			window.removeEventListener("scroll", addBg);
		};
	}, []);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = pdfFile;
		link.download = "Jelena Suvajac.pdf";
		link.click();
	};

	return (
		<header className={activeHeader}>
			<div className="logoDiv">
				<h1 className="logo">
					<a href="#home">
						<img src={Logo} alt="Logo" />
					</a>
				</h1>
			</div>
			<div className={active}>
				<ul onClick={removeNavBar} className="navLists">
					<li className="navItem">
						<a href="#about" className="navLink">
							About
						</a>
					</li>
					<li className="navItem">
						<a href="#skills" className="navLink">
							Skills
						</a>
					</li>
					<li className="navItem">
						<a href="#projects" className="navLink">
							Projects
						</a>
					</li>
					<li className="navItem">
						<a href="#contact" className="navLink">
							Contact
						</a>
					</li>
					<button className="btn">
						<a onClick={handleDownload} href="#">
							Resume
						</a>
					</button>
				</ul>
				<div onClick={removeNavBar} className="closeNavBar">
					<AiFillCloseCircle className="icon" />
				</div>
			</div>
			<div onClick={showNavBar} className="toggleNavBar">
				<TbGridDots className="icon" />
			</div>
		</header>
	);
};

export default Navbar;
