import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import AccordionDescription from "../components/Description";


import img1 from "../images/sport wear/5/tte2122_mode_modeinformation_modeinfo.jpg";
import img2 from "../images/sport wear/5/tte2122_mode_modeinformation_modeinfo_1.jpg";
import img3 from "../images/sport wear/1/srs2627.jpg";
import img4 from "../images/sport wear/2/srst2627.jpg";
import img5 from "../images/sport wear/3/srs2526.jpg"
import img6 from "../images/sport wear/4/tte2022_mode_modeinformation_modeinfo.jpg"



function Sport() {
const [hovered, setHovered] = useState(false);

return (
    <div className="row mx-5 my-5 all">
        <div className="container my-4">
                            <AccordionDescription title="SportssWear">
                            Activewear Design & Fabric Trend Book
                            A dynamic trend and development guide focused on activewear fabrics and garment styling. This book features performance-driven materials—lightweight, breathable, stretch, and technical fabrics—suitable for sportswear, athleisure, and fitness apparel.
                            It includes garment design ideas, technical construction details, and styling suggestions for men’s, women’s, and kids’ activewear—covering t-shirts, leggings, hoodies, jackets, and sets.
                            Created to support brands and manufacturers in developing collections that blend comfort, functionality, and contemporary style.
                            English edition with fabric swatches, design illustrations, and colour inspirations. Published regularly.
                            </AccordionDescription>
                        </div>
        {/* <h6 className="text-center mb-5 description">Activewear Design & Fabric Trend Book
A dynamic trend and development guide focused on activewear fabrics and garment styling. This book features performance-driven materials—lightweight, breathable, stretch, and technical fabrics—suitable for sportswear, athleisure, and fitness apparel.
It includes garment design ideas, technical construction details, and styling suggestions for men’s, women’s, and kids’ activewear—covering t-shirts, leggings, hoodies, jackets, and sets.
Created to support brands and manufacturers in developing collections that blend comfort, functionality, and contemporary style.
English edition with fabric swatches, design illustrations, and colour inspirations. Published regularly.</h6> */}
    <Link className="shirt-card col-3" to="/sport1">
    <div
    className=""
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
    <img
        src={hovered ? img2 : img1}
        alt="shirt"
        className="shirt-image shirt-card col-3"
    />
    </div>
    </Link>
        <Link className="shirt-card col-3" to="#">
            <img src={ img3} alt="shirt" className="shirt-image shirt-card col-3 mb-5"/>
        </Link>
        <Link className="shirt-card col-3 mb-5"to="#">
            <img src={img4} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3 mb-5"to="#">
            <img src={img5} alt="shirt" className="shirt-image shirt-card col-3 mb-5"/>
        </Link>
        <Link  className="shirt-card col-3 mb-5"to="#">
            <img src={img6} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
    </div>
);
}

export default Sport;