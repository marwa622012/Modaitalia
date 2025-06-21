import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import AccordionDescription from "../components/Description";


import img1 from "../images/Baby & Kids wear/1/bcky2627.jpg";
import img2 from "../images/Baby & Kids wear/2/srkt2627.jpg";
import img3 from "../images/Baby & Kids wear/3/bcnb2627.jpg";
import img4 from "../images/Baby & Kids wear/4/srbt2627.jpg";
import img5 from "../images/Baby & Kids wear/5/srb2627.jpg"
import img6 from "../images/Baby & Kids wear/6/srkg2627-1.jpg"
import img7 from "../images/Baby & Kids wear/7/bcky2026.jpg"
import img8 from "../images/Baby & Kids wear/7/bcky2026_1.jpeg";
import img9 from "../images/Baby & Kids wear/8/bcnb2026.jpg";
import img10 from "../images/Baby & Kids wear/9/srb2026.jpg";
import img11 from "../images/Baby & Kids wear/10/srk2026.jpg";



function Kidswear() {
const [hovered, setHovered] = useState(false);

return (
    <div className="row mx-5 my-5 all">
        <div className="container my-4">
                    <AccordionDescription title="KidsWear">
                        Design & Fabric Trend Book for Kidswear
                        A creative and practical guide dedicated to children’s fashion, combining fabric innovation with garment styling and construction ideas. This book features a variety of kid-friendly fabrics—soft, functional, and playful—alongside illustrated designs and technical suggestions for boys’ and girls’ clothing.
                        From casual sets to outerwear, and from jersey essentials to woven styles, it offers complete inspiration for designers and manufacturers working in baby, kids, and teenwear segments.
                        Includes fabric swatches, colour charts, and styling concepts tailored to comfort, safety, and trend appeal.
                        English edition with fabric inserts and design illustrations. Published regularly                                
                    </AccordionDescription>
                </div>
        {/* <h6 className="text-center mb-5 description">Design & Fabric Trend Book for Kidswear
A creative and practical guide dedicated to children’s fashion, combining fabric innovation with garment styling and construction ideas. This book features a variety of kid-friendly fabrics—soft, functional, and playful—alongside illustrated designs and technical suggestions for boys’ and girls’ clothing.
From casual sets to outerwear, and from jersey essentials to woven styles, it offers complete inspiration for designers and manufacturers working in baby, kids, and teenwear segments.
Includes fabric swatches, colour charts, and styling concepts tailored to comfort, safety, and trend appeal.
English edition with fabric inserts and design illustrations. Published regularly.</h6> */}
    <Link className="shirt-card col-3" to="#">
    <div
    className=""
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
    <img
        src={hovered ? img8 : img7}
        alt="shirt"
        className="shirt-image shirt-card col-3"
    />
    </div>
    </Link>
        <Link className="shirt-card col-3" to="#">
            <img src={ img1} alt="shirt" className="shirt-image shirt-card col-3 mb-5"/>
        </Link>
        <Link className="shirt-card col-3 mb-5"to="#">
            <img src={img2} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3 mb-5"to="#">
            <img src={img3} alt="shirt" className="shirt-image shirt-card col-3 mb-5"/>
        </Link>
        <Link  className="shirt-card col-3 mb-5"to="#">
            <img src={img4} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3"to="#">
            <img src={img5} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3"to="#">
            <img src={img6} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3"to="#">
            <img src={img9} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3"to="#">
            <img src={img10} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3"to="#">
            <img src={img11} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
    </div>
);
}

export default Kidswear;