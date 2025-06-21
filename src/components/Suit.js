import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shirts.css"; 
import AccordionDescription from "../components/Description";


import img1 from "../images/Suits/Suit 1/copert_drap_AW_2627_2048x2048.webp";
import img2 from "../images/Suits/Suit 1/drapperia2627_1_2048x2048.webp";
import img3 from "../images/Suits/Suit 2/copertCREATIVITYformicrod_2048x2048.jpg";
import img4 from "../images/Suits/Suit 2/Creativitymicrodesigns_1_bd03c8dc-81de-4358-aa72-6aef4cf34771_2048x2048.jpg";
import img5 from "../images/Suits/Suit 3/copertsuiting_2048x2048.jpg"
import img6 from "../images/Suits/Suit 3/suitingpatterns-1_2048x2048.jpg"
import img7 from "../images/Suits/Suit 4/menswear_scenario_AW_2627_2048x2048.webp"
import img8 from "../images/Suits/Suit 4/scenariouomo-1_2048x2048.jpg"
import img9 from "../images/Suits/Suit 5/12d9de_d289803eba924adfaf58cc59d0d64c62~mv2.webp"
import img10 from "../images/Suits/Suit 5/12d9de_a93ff49c171f43a79affb438f8c7fe80~mv2.webp"


function Suit() {
const [hovered, setHovered] = useState(false);
const [hover, setHover] = useState(false);
const [hove, setHove] = useState(false);
const [shirt, setshirt] = useState(false);
const [shirt5, setshirt5] = useState(false);
// const [shirt6, setshirt6] = useState(false);
// const [shirt7, setshirt7] = useState(false);

return (
    <div className="row mx-5 my-5 all">
            <div className="container my-4">
                        <AccordionDescription title="Suits">
                        Suiting Fabric Trend Books
                        An exclusive trend guide dedicated to the world of suiting, tailored for professionals seeking innovation and elegance in men’s formalwear. This edition showcases a refined selection of fabrics for suits, jackets, and trousers—carefully chosen by textile experts to highlight the season’s most relevant yarns, textures, weaves, and finishes.
                        A dedicated colour chart with Pantone® references accompanies the swatches, along with an insightful analysis of the emerging trends shaping modern tailoring.
                        Biannual publication. English edition with premium fabric swatches.
                        </AccordionDescription>
                    </div>
        <Link className="shirt-card col-3" to="/suit1">
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
    <Link className="shirt-card col-3" to="/suit2">
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
    <Link className="shirt-card col-3 "to="/suit3">
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
    <Link  className="shirt-card col-3"to="/suit4">
            <div onMouseEnter={() => setshirt(true)} onMouseLeave={() => setshirt(false)}>
            <img src={shirt ? img8 : img7} alt="shirt" className="shirt-image"/>
            {/* <div className="shirt-text text-dark">
                <h6 className="font-bold">DRESS SHIRT Autumn/Winter</h6>
                <p>2026/2027</p>
            </div> */}
        </div>
        </Link>    
        <Link  className="shirt-card col-3"to="/suit5">
            <div onMouseEnter={() => setshirt5(true)} onMouseLeave={() => setshirt5(false)}>
            <img src={shirt5 ? img10 : img9} alt="shirt" className="shirt-image"/>
        </div>
        </Link>  
    </div>
);
}

export default Suit;