import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { SiAdobexd } from "react-icons/si";
import img from "../../assets/XD Projects/Home - Design.png";
import img1 from "../../assets/XD Projects/Cards - Design.png";
import img2 from "../../assets/XD Projects/Dashboard - Accounts - Design.png";
import img3 from "../../assets/XD Projects/Dashboard - Cards - Design.png";
import img4 from "../../assets/XD Projects/Dashboard - Design.png";
import img5 from "../../assets/XD Projects/Dashboard - Digital - Design.png";
import img6 from "../../assets/XD Projects/Dashboard - Loans - Design.png";
import img7 from "../../assets/XD Projects/Dashboard - Transactions - Design.png";
import img8 from "../../assets/XD Projects/Log In - Design.png";
import img9 from "../../assets/XD Projects/Sign Up - Design.png";
import img10 from "../../assets/XD Projects/Home- Low fidelity_1.png";
import img11 from "../../assets/XD Projects/Magazne - Low fidelity.png";
import img12 from "../../assets/XD Projects/Moodboard.png";
import img13 from "../../assets/XD Projects/Projects - Apartments.png";
import img14 from "../../assets/XD Projects/Projects - Houses.png";
import img15 from "../../assets/XD Projects/Projects - Office.png";
import img16 from "../../assets/XD Projects/Projects - Restaurants.png";

const data = [
	{
		id: 1,
		image: img,
	},
	{
		id: 2,
		image: img1,
	},
	{
		id: 3,
		image: img2,
	},
	{
		id: 4,
		image: img3,
	},
	{
		id: 5,
		image: img4,
	},
	{
		id: 6,
		image: img5,
	},
	{
		id: 7,
		image: img6,
	},
	{
		id: 8,
		image: img7,
	},
	{
		id: 9,
		image: img8,
	},
	{
		id: 10,
		image: img9,
	},
	{
		id: 11,
		image: img10,
	},
	{
		id: 12,
		image: img11,
	},
	{
		id: 13,
		image: img12,
	},
	{
		id: 14,
		image: img13,
	},
	{
		id: 15,
		image: img14,
	},
	{
		id: 16,
		image: img15,
	},
	{
		id: 17,
		image: img16,
	},
];

const XD = () => {
	const [modal, setModal] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState("");
	const [zoomLevel, setZoomLevel] = useState(1);
	const [startY, setStartY] = useState(0);
	const [currentY, setCurrentY] = useState(0);

	const maxZoomLevel = 3;

	const getImg = (image) => {
		setTempImgSrc(image);
		setModal(true);
		document.body.style.overflow = "hidden"; // Prevent scrolling on modal open
	};

	const handleZoomIn = () => {
		if (zoomLevel < maxZoomLevel) {
			setZoomLevel(zoomLevel + 1);
		}
	};

	const handleZoomOut = () => {
		if (zoomLevel > 1) {
			setZoomLevel(zoomLevel - 1);
		}
	};

	const handleCloseModal = () => {
		setZoomLevel(1);
		setModal(false);
		setCurrentY(0);
		document.body.style.overflow = "auto"; // Enable scrolling on modal close
	};

	const handleMouseDown = (e) => {
		if (zoomLevel > 1 && e.button === 0) {
			// Only move when zoomed in and left button is pressed
			setStartY(e.clientY);
		}
	};

	const handleMouseMove = (e) => {
		if (zoomLevel > 1 && e.buttons === 1) {
			const movement = (e.clientY - startY) * 20; // Change 20 to desired factor
			const newY = currentY + movement;
			const maxY = (zoomLevel - 1) * 200; // Change 300 to desired range
			setCurrentY(Math.max(-maxY, Math.min(newY, maxY)));
			setStartY(e.clientY);
		}
	};

	const handleMouseWheel = (e) => {
		if (e.ctrlKey) {
			e.preventDefault(); // Prevent webpage scrolling while zooming
			if (e.deltaY > 0) {
				handleZoomOut();
			} else {
				handleZoomIn();
			}
		}
	};

	return (
		<section id="projects" className="projects container section">
			<div className="flex">
				<SiAdobexd className="icon illustrator" />
				<div className="section_subtitle">Adobe XD</div>
			</div>
			<div className={modal ? "modal open" : "modal"}>
				<img
					src={tempImgSrc}
					style={{ transform: `scale(${zoomLevel}) translateY(${currentY}px)` }}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={() => setCurrentY(0)}
					onWheel={handleMouseWheel}
				/>
				<ZoomInIcon className="zoomIn" onClick={handleZoomIn} />
				<ZoomOutIcon className="zoomOut" onClick={handleZoomOut} />
				<CloseIcon className="close" onClick={handleCloseModal} />
			</div>
			<div className="galery">
				{data.map(({ id, image }) => {
					return (
						<div className="pics" key={id} onClick={() => getImg(image)}>
							<img src={image} style={{ width: "100%" }} />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default XD;
