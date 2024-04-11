import "./projects.scss";

import img from "../../assets/Illustrator projects/Legends.jpg";
import img1 from "../../assets/Illustrator projects/Legends Blue.png";
import img4 from "../../assets/Illustrator projects/Mischief Creative RED 1.png";
import img3 from "../../assets/Illustrator projects/Mischief Creative skull 1 black.jpg";
import img2 from "../../assets/Illustrator projects/NAMASTE.png";
import img5 from "../../assets/Illustrator projects/Pastures of Heaven Pet Memorial Park.png";
import img6 from "../../assets/Illustrator projects/Sydney Creative Management.png";
import img7 from "../../assets/Illustrator projects/Soul Train Red.png";
import img8 from "../../assets/Illustrator projects/beta prooooo.png";
import img9 from "../../assets/Illustrator projects/MInt.png";
import img10 from "../../assets/Illustrator projects/herera.png";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { SiAdobeillustrator } from "react-icons/si";

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
];

const Illustrator = () => {
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
			<div className="sectionTitle">
				<h5 className="titleText">
					Projects
					<div className="underline">
						<span></span>
					</div>
				</h5>
			</div>
			<div className="flex">
				<SiAdobeillustrator className="icon illustrator" />
				<div className="section_subtitle">Adobe Illustrator</div>
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

export default Illustrator;
