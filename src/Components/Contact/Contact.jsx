import React, { useRef } from "react";
import "./contact.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { TbArrowBigRightLines } from "react-icons/tb";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_38fqiau",
			"template_3kj8gdt",
			form.current,
			"iOAB69oL_ytgtZCq1"
		);
		e.target.reset();
	};

	return (
		<section id="contact" className="contact section container">
			<div className="sectionTitle">
				<span className="titleNumber">04.</span>
				<h5 className="titleText">
					Contact
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>
			<div className="contactContainer grid">
				<div className="socialContacts grid">
					<h3>Talk to me</h3>
					<div className="cards grid">
						<div className="card">
							<div>
								<AiFillLinkedin className="icon" />
							</div>
							<h4>Linkedin</h4>
							<div>
								<a
									href="https://www.linkedin.com/in/milan-suvajac-ms"
									target="_blank"
									className="flex"
								>
									Send message
									<TbArrowBigRightLines className="icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="form grid">
					<h3>Send me an Email</h3>
					<form ref={form} onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Enter your Name" />
						<input type="email" name="email" placeholder="Enter your Email" />
						<textarea
							name="message"
							placeholder="Enter your message"
						></textarea>
						<button className="formBtn" type="submit" name="submit">
							Send Email
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
