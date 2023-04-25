// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

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

	return (
		<header className={activeHeader}>
			<div className="logoDiv">
				<h1 className="logo">
					<a href="#home">JS</a>
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
						<a href="">Resume</a>
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
