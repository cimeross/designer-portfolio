import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { SiAdobeindesign } from "react-icons/si";
import img from "../../assets/INdesign projects/Homework 1.png";
import img1 from "../../assets/INdesign projects/Homework 2.png";
import img2 from "../../assets/INdesign projects/Homework 3.jpg";
import img3 from "../../assets/INdesign projects/Homework 4.png";
import img4 from "../../assets/INdesign projects/Homework 5.png";
import img5 from "../../assets/INdesign projects/Homework 6.png";
import img6 from "../../assets/INdesign projects/Homework 7.png";
import img7 from "../../assets/INdesign projects/Homework 8.png";
import img8 from "../../assets/INdesign projects/Homework 9.png";
import img9 from "../../assets/INdesign projects/Homework 10.png";
import img10 from "../../assets/INdesign projects/Homework 11.png";
// import img11 from "../../assets/INdesign projects/Homework 12.png";
import img12 from "../../assets/INdesign projects/Homework 13.png";
import img13 from "../../assets/INdesign projects/Homework 14.png";

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
	// {
	// 	id: 12,
	// 	image: img11,
	// },
	{
		id: 13,
		image: img12,
	},
	{
		id: 14,
		image: img13,
	},
];

const InDesign = () => {
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
				<SiAdobeindesign className="icon illustrator" />
				<div className="section_subtitle">Adobe InDesign</div>
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

export default InDesign;
