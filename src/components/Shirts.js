import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shirts.css"; 

import img1 from "../images/shirts/shirt 1/copertshirt26_27_720x.webp";
import img2 from "../images//shirts/shirt 1/Shirt_1_2048x2048.webp";
import img3 from "../images/shirts/shirt 2/copert_dobby_shirt_26_27_2048x2048.webp";
import img4 from "../images/shirts/shirt 2/Dobby_1_2048x2048.webp";
import img5 from "../images/shirts/shirt 3/copert_overcheck_f214431f-fe63-4186-8461-a3691b811b8c_2048x2048.webp"
import img6 from "../images/shirts/shirt 3/overchecks_1_2048x2048.webp"
import img7 from "../images/shirts/shirt 4/1.webp"
import img8 from "../images/shirts/shirt 4/dressshirtss26_1_2048x2048.webp"
import img9 from "../images/shirts/shirt 5/12d9de_a3dd3a95883949b4ab649e7eb92714cc~mv2.webp"
import img10 from "../images/shirts/shirt 5/12d9de_edbca5c92c4643d7bbe435ab1ff943ea~mv2.webp"
import img11 from "../images/shirts/shirt 6/12d9de_7215c24d775d4815bf542b6c07a04682~mv2.webp"
import img12 from "../images/shirts/shirt 6/12d9de_bd6647046aab43adb806d2df02d815b9~mv2.webp"
import img13 from "../images/shirts/shirt 7/12d9de_64844673133547baa4990e77f886af39~mv2.webp"
import img14 from "../images/shirts/shirt 7/12d9de_e7e2d397fdd44fa59a40f520c4a98c86~mv2.webp"
import AccordionDescription from "../components/Description";

function ShirtCard() {
const [hovered, setHovered] = useState(false);
const [hover, setHover] = useState(false);
const [hove, setHove] = useState(false);
const [shirt, setshirt] = useState(false);
const [shirt5, setshirt5] = useState(false);
const [shirt6, setshirt6] = useState(false);
const [shirt7, setshirt7] = useState(false);

return (
    <div className="row mx-5 my-5 all">
        {/* <h6 className="text-center mb-5 description">Trend Book for Men's Shirt Fabrics
A professional trend publication focused on fabrics and colour directions for men’s shirts across city, sporty, and leisurewear styles. It highlights key trends in fibres, yarns, weaves, and patterns for yarn-dyed fabrics in cotton, linen, and blends. Each edition includes a curated selection of trending fabric swatches and a dedicated colour card with Pantone® references.
Published biannually. English edition with fabric inserts.</h6> */}
  <div className="container my-4">
      <AccordionDescription title="Shirts">
        Trend Book for Men's Shirt Fabrics
A professional trend publication focused on fabrics and colour directions for men’s shirts across city, sporty, and leisurewear styles. It highlights key trends in fibres, yarns, weaves, and patterns for yarn-dyed fabrics in cotton, linen, and blends. Each edition includes a curated selection of trending fabric swatches and a dedicated colour card with Pantone® references.
Published biannually. English edition with fabric inserts.
      </AccordionDescription>

      {/* باقي محتوى الصفحة */}
    </div>
        <Link className="shirt-card col-xl-3 col-md-6 col-12 mb-4" to="/shirtdetails">
        <div
    className=""
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
    <img
        src={hovered ? img2 : img1}
        alt="shirt"
        className="shirt-image"
    />
    <div className="shirt-text">
        <h6 className="font-bold text-dark">SHIRT Autumn/Winter</h6>
        <p className="text-dark">2026/2027</p>
    </div>
    </div>
        </Link>
    <Link className="shirt-card col-xl-3 col-md-6 col-12 mb-4" to="/dobbyshirt">
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
    <div className="shirt-text">
        <h6 className="font-bold text-dark">DOBBY SHIRT Autumn/Winter</h6>
        <p className="text-dark">2026/2027</p>
    </div>
    </div>
    </Link>
    <Link className="shirt-card col-xl-3 col-md-6 col-12 mb-4"to="/overshirt">
        <div
        onMouseEnter={() => setHove(true)}
        onMouseLeave={() => setHove(false)}
        >
        <img
            src={hove ? img6 : img5}
            alt="shirt"
            className="shirt-image"
        />
        <div className="shirt-text">
            <h6 className="font-bold text-dark">OVER SHIRT Autumn/Winter</h6>
            <p className="text-dark">2026/2027</p>
        </div>
        </div>
    </Link>
    <Link  className="shirt-card col-xl-3 col-md-6 col-12 mb-4"to="/dressshirt">
            <div onMouseEnter={() => setshirt(true)} onMouseLeave={() => setshirt(false)}>
            <img src={shirt ? img8 : img7} alt="shirt" className="shirt-image"/>
            <div className="shirt-text text-dark">
                <h6 className="font-bold">DRESS SHIRT Autumn/Winter</h6>
                <p>2026/2027</p>
            </div>
        </div>
        </Link>    
        <Link  className="shirt-card col-xl-3 col-md-6 col-12"to="/btt">
            <div onMouseEnter={() => setshirt5(true)} onMouseLeave={() => setshirt5(false)}>
            <img src={shirt5 ? img10 : img9} alt="shirt" className="shirt-image"/>
        </div>
        </Link>  
        <Link  className="shirt-card col-xl-3 col-md-6 col-12"to="#">
            <div onMouseEnter={() => setshirt6(true)} onMouseLeave={() => setshirt6(false)}>
            <img src={shirt6 ? img12 : img11} alt="shirt" className="shirt-image"/>
        </div>
        </Link>
        <Link  className="shirt-card col-xl-3 col-md-6 col-12"to="#">
            <div onMouseEnter={() => setshirt7(true)} onMouseLeave={() => setshirt7(false)}>
            <img src={shirt7 ? img14 : img13} alt="shirt" className="shirt-image"/>
        </div>
        </Link>
    </div>
);
}

export default ShirtCard;
