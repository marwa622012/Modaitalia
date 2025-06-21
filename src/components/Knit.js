import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Knit.css'
import AccordionDescription from "../components/Description";

import img1 from "../images/knit/knit 1/cop_knit_shirt_aw23_24_bbc43826-3b1e-4947-8ce3-6fe07627741f_2048x2048.webp";
import img2 from "../images/knit/knit 1/ksss2026-1_2048x2048.webp";
import img3 from "../images/knit/knit 2/KNITWEAR_cop_2048x2048.webp";
import img4 from "../images/knit/knit 2/Knit_wear_womens_12_2048x2048.jpg";
import img5 from "../images/knit/knit 3/COPjerseyman_99a3b324-ceee-4caa-8607-2bb649ff2111_2048x2048.webp"
import img6 from "../images/knit/knit 3/kintmen_0-1_2048x2048.webp"
import img7 from "../images/knit/knit 4/mi187_mode_modeinformation_modeinfo.jpg"
import img8 from "../images/knit/knit 4/mi187_mode_modeinformation_modeinfo_1.jpg"
import img9 from "../images/knit/knit 5/fbkw2223.jpg"
import img10 from "../images/knit/knit 5/fbkw2223.jpg"
import img11 from "../images/knit/knit 6/fbkw2021_mode_modeinformation_modeinfo.jpg"
import img12 from "../images/knit/knit 6/fbkw2021_mode_modeinformation_modeinfo_1.jpg"
import img13 from "../images/knit/knit 7/fbkw2122.jpg"




function Knit() {
const [hovered, setHovered] = useState(false);
const [hover, setHover] = useState(false);
const [hove, setHove] = useState(false);
const [shirt, setshirt] = useState(false);
const [shirt5, setshirt5] = useState(false);
const [shirt6, setshirt6] = useState(false);
// const [shirt7, setshirt7] = useState(false);

return (
    <div className="row mx-5 my-5 all">
        <div className="container my-4">
                                <AccordionDescription title="Knitting">
                                Trend Books for Knitted Fabrics
                                A forward-looking trend publication dedicated to knitted fabrics for contemporary fashion, covering both menswear and womenswear. It features a refined selection of knit swatches—ranging from lightweight jerseys to structured jacquards and double-face knits—suitable for t-shirts, trousers, jackets, and sweaters.
                                Particular attention is given to organic and recycled fibres, as well as high-performance, functional knits ideal for casual, active, and everyday essentials.
                                Includes a colour chart with Pantone® references and a trend overview highlighting the season’s key directions.
                                Published biannually. English edition with fabric inserts.
                                </AccordionDescription>
                            </div>
        <Link className="shirt-card col-3" to="/knit1">
        <div
    className=""
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
    <img
        src={hovered ? img2 : img1}
        alt="shirt"
        className="shirt-image"
    />
    {/* <div className="shirt-text">
        <h6 className="font-bold text-dark">SHIRT Autumn/Winter</h6>
        <p className="text-dark">2026/2027</p>
    </div> */}
    </div>
        </Link>
    <Link className="shirt-card col-3" to="/knit2">
    <div
    className=""
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
    <img
        src={hover ? img4 : img3}
        alt="shirt"
        className="shirt-image"
    />
    {/* <div className="shirt-text">
        <h6 className="font-bold text-dark">DOBBY SHIRT Autumn/Winter</h6>
        <p className="text-dark">2026/2027</p>
    </div> */}
    </div>
    </Link>
    <Link className="shirt-card col-3"to="/knit3">
        <div
        onMouseEnter={() => setHove(true)}
        onMouseLeave={() => setHove(false)}
        >
        <img
            src={hove ? img6 : img5}
            alt="shirt"
            className="shirt-image"
        />
        {/* <div className="shirt-text">
            <h6 className="font-bold text-dark">OVER SHIRT Autumn/Winter</h6>
            <p className="text-dark">2026/2027</p>
        </div> */}
        </div>
    </Link>
    <Link  className="shirt-card col-3"to="/knit4">
            <div onMouseEnter={() => setshirt(true)} onMouseLeave={() => setshirt(false)}>
            <img src={shirt ? img8 : img7} alt="shirt" className="shirt-image "/>
            {/* <div className="shirt-text text-dark">
                <h6 className="font-bold">DRESS SHIRT Autumn/Winter</h6>
                <p>2026/2027</p>
            </div> */}
        </div>
        </Link>    
        <Link  className="shirt-card col-3"to="#">
            <div onMouseEnter={() => setshirt5(true)} onMouseLeave={() => setshirt5(false)}>
            <img src={shirt5 ? img10 : img9} alt="shirt" className="shirt-image"/>
        </div>
        </Link>  
        <Link  className="shirt-card col-3"to="/knit6">
            <div onMouseEnter={() => setshirt6(true)} onMouseLeave={() => setshirt6(false)}>
            <img src={shirt6 ? img12 : img11} alt="shirt" className="shirt-image"/>
        </div>
        </Link> 
        <Link  className="shirt-card col-3"to="#">
            <div>
            <img src={img13} alt="shirt" className="shirt-image"/>
        </div>
        </Link> 
    </div>
);
}

export default Knit;