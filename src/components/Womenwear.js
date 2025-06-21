import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shirts.css"; 
import AccordionDescription from "../components/Description";


import img1 from "../images/Women Wear/1/copertwomensSS26_720x.webp";
import img2 from "../images/Women Wear/1/womenswear_1-14SS26_720x.webp";
import img3 from "../images/Women Wear/2/jacquard_720x.webp";
import img4 from "../images/Women Wear/2/jacquard2627-1_720x.webp";
import img5 from "../images/Women Wear/3/copertwomenswear_720x.webp"
import img6 from "../images/Women Wear/3/womenswear2627-10_720x.webp"
import img7 from "../images/Women Wear/4/styleright-women-ss-2026-tendenze-moda-donna-cover.png"
import img8 from "../images/Women Wear/4/srw2021_mede_1.jpg"
import img9 from "../images/Women Wear/5/next-look-women-tendenze-moda-donna-aw-25-26_1.jpg"
import img10 from "../images/Women Wear/5/next-look-women-trend-immagine-archivio.2_2.jpg"
import img11 from "../images/Women Wear/6/26_2_caleidoscopio_coverpage_modeinfo(4).jpg"
import img12 from "../images/Women Wear/6/26_2_caleidoscopio_coverpage_modeinfo(4).jpg"
import img13 from "../images/Women Wear/7/cew2627.jpg"
import img14 from "../images/Women Wear/7/cew2627.jpg"

function Womenwear() {
const [hovered, setHovered] = useState(false);
const [hover, setHover] = useState(false);
const [hove, setHove] = useState(false);
const [shirt, setshirt] = useState(false);
const [shirt5, setshirt5] = useState(false);
const [shirt6, setshirt6] = useState(false);
const [shirt7, setshirt7] = useState(false);

return (
    <div className="row mx-5 my-5 all">
        <div className="container my-4">
            <AccordionDescription title="WomenWear">
                                                Trend Book for Fashion Fabrics
                    A versatile and forward-thinking guide to fabric trends, created to inspire both fabric manufacturers and garment producers. This edition explores innovative materials for trousers, dresses, jackets, and versatile separates, with a special focus on womenswear.
                    It features a wide range of fabrics—from cotton blends to technical fibres, textured jacquards, and creative weaves—suitable for both sporty and city-inspired styles.
                    Alongside fabric swatches and Pantone®-referenced colour trends, the book includes styling suggestions and garment concepts, offering complete inspiration from textile to finished product.
                    An essential tool for those seeking direction in design, product development, or textile innovation.
                    Published biannually. English edition with fabric inserts and styling visuals.
            </AccordionDescription>
        </div>
        {/* <h6 className="text-center mb-5 description">Trend Book for Fashion Fabrics
A versatile and forward-thinking guide to fabric trends, created to inspire both fabric manufacturers and garment producers. This edition explores innovative materials for trousers, dresses, jackets, and versatile separates, with a special focus on womenswear.
It features a wide range of fabrics—from cotton blends to technical fibres, textured jacquards, and creative weaves—suitable for both sporty and city-inspired styles.
Alongside fabric swatches and Pantone®-referenced colour trends, the book includes styling suggestions and garment concepts, offering complete inspiration from textile to finished product.
An essential tool for those seeking direction in design, product development, or textile innovation.
Published biannually. English edition with fabric inserts and styling visuals.</h6> */}
        <Link className="shirt-card col-3" to="/womenwear1">
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
    <Link className="shirt-card col-3" to="/womenswear2">
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
    <Link className="shirt-card col-3"to="/womenswear3">
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
    <Link  className="shirt-card col-3"to="/womenswear4">
            <div onMouseEnter={() => setshirt(true)} onMouseLeave={() => setshirt(false)}>
            <img src={shirt ? img8 : img7} alt="shirt" className="shirt-image"/>
            {/* <div className="shirt-text text-dark">
                <h6 className="font-bold">DRESS SHIRT Autumn/Winter</h6>
                <p>2026/2027</p>
            </div> */}
        </div>
        </Link>    
        <Link  className="shirt-card col-3"to="/womenswear5">
            <div onMouseEnter={() => setshirt5(true)} onMouseLeave={() => setshirt5(false)}>
            <img src={shirt5 ? img10 : img9} alt="shirt" className="shirt-image"/>
        </div>
        </Link>  
        <Link  className="shirt-card col-3"to="#">
            <div onMouseEnter={() => setshirt6(true)} onMouseLeave={() => setshirt6(false)}>
            <img src={shirt6 ? img12 : img11} alt="shirt" className="shirt-image"/>
        </div>
        </Link>
        <Link  className="shirt-card col-3"to="#">
            <div onMouseEnter={() => setshirt7(true)} onMouseLeave={() => setshirt7(false)}>
            <img src={shirt7 ? img14 : img13} alt="shirt" className="shirt-image"/>
        </div>
        </Link>
    </div>
);
}

export default Womenwear;