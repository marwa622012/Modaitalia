import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import AccordionDescription from "../components/Description";


import img1 from "../images/pants/pant 1/coper_TROUSER_2048x2048.webp";
import img2 from "../images/pants/pant 1/trousering_830-1_2048x2048.webp";
import img3 from "../images/pants/pant 2/cop_sport_and_street_ba336a11-0ff7-4d2d-bffb-d20fd6f88e0b_2048x2048.webp";
import img4 from "../images/pants/pant 2/sportstyle-1_2048x2048.webp";
import img5 from "../images/pants/pant 3/nlcwst15.jpg"
import img6 from "../images/pants/pant 4/nlcwst18.jpg"
// import img7 from "../images/Suits/Suit 4/menswear_scenario_AW_2627_2048x2048.webp"
// import img8 from "../images/Suits/Suit 4/scenariouomo-1_2048x2048.jpg"
// import img9 from "../images/Suits/Suit 5/12d9de_d289803eba924adfaf58cc59d0d64c62~mv2.webp"
// import img10 from "../images/Suits/Suit 5/12d9de_a93ff49c171f43a79affb438f8c7fe80~mv2.webp"


function Pants() {
const [hovered, setHovered] = useState(false);
const [hover, setHover] = useState(false);
// const [shirt, setshirt] = useState(false);
// const [shirt5, setshirt5] = useState(false);
// const [shirt6, setshirt6] = useState(false);
// const [shirt7, setshirt7] = useState(false);

return (
    <div className="row mx-5 my-5 all">
            <div className="container my-4">
                <AccordionDescription title="Trousers">
                Trend Book for Trouser Fabrics
                        A professional guide to fabric trends for sports and city trousers, designed for both menswear and womenswear. It features selected materials in cotton and fibre blends, combining comfort, functionality, and style.
                        Includes a curated mix of fabric swatches, colour inspirations with Pantone® codes, and key garment visuals—supporting creative development across casual and tailored styles.
                        Published biannually. English edition with fabric inserts
                </AccordionDescription>
            </div>
        <Link className="shirt-card col-3" to="/pants1">
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
    </div>
        </Link>
    <Link className="shirt-card col-3" to="/pants2">
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
    </div>
    </Link>
    <Link className="shirt-card col-3"to="#">
    <div>
        <img
            src={img5}
            alt="shirt"
            className="shirt-image col-3"
        />
        </div>
    </Link>
    <Link  className="shirt-card col-3"to="#">
            <div>
            <img src={img6} alt="shirt" className="shirt-image col-3"/>
        
        </div>
        </Link>
        {/* <Link  className="shirt-card col-3 mt-5"to="/btt">
            <div onMouseEnter={() => setshirt5(true)} onMouseLeave={() => setshirt5(false)}>
            <img src={shirt5 ? img10 : img9} alt="shirt" className="shirt-image"/>
        </div>
        </Link>  */}
    </div>
);
}

export default Pants;