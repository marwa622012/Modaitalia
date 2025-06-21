import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import AccordionDescription from "../components/Description";


import img1 from "../images/Prints/4/2os02_mode_modeinformation_modeinfo.jpg";
import img2 from "../images/Prints/4/2os02_mode_modeinformation_modeinfo_1.jpg";
import img3 from "../images/Prints/5/203472_naturalpoptext02_p1.jpg";
import img4 from "../images/Prints/5/203472_offen01_p2.jpg";
import img5 from "../images/Prints/6/2gcbg01_mode_modeinformation_modeinfo.jpg"
import img6 from "../images/Prints/6/2gcbg01_mode_modeinformation_modeinfo_1.jpg"
import img7 from "../images/Prints/7/2act01_mode_modeinformation_modeinfo.jpg"
import img8 from "../images/Prints/7/2act01_mode_modeinformation_modeinfo_1.jpg";
import img9 from "../images/Prints/8/203556_offen01_p2.jpg";
import img10 from "../images/Prints/8/203556_offen02_p3.jpg";
import img11 from "../images/Prints/1/pmtt16.jpg";
import img12 from "../images/Prints/2/pmtp1112.jpg";
import img13 from "../images/Prints/3/2sng01_mode_modeinformation_modeinfo.jpg";



function Prints() {
const [hovered, setHovered] = useState(false);
const [hover, setHover] = useState(false);
const [hove, setHove] = useState(false);
const [shirt, setshirt] = useState(false);
const [shirt5, setshirt5] = useState(false);

return (
    <div className="row mx-5 my-5 all">
        <div className="container my-4">
            <AccordionDescription title="Prints">
                                Print Design Catalogue – All-Over & Placed Prints
                                A specialised collection of exclusive print designs created for womenswear, menswear, and kidswear. This catalogue showcases a wide variety of all-over and placed prints—ranging from bold and expressive to delicate and refined—suitable for diverse styles and product categories.
                                Each design is delivered with a high-resolution digital file in editable format, allowing easy customisation and adaptation across garments and fabric types.
                                Ideal for designers, brands, and printing houses seeking ready-to-use prints with creative flexibility and commercial appeal.
                                English edition. Regularly updated.
            </AccordionDescription>
        </div>
        {/* <h6 className="text-center mb-5 description">Print Design Catalogue – All-Over & Placed Prints
A specialised collection of exclusive print designs created for womenswear, menswear, and kidswear. This catalogue showcases a wide variety of all-over and placed prints—ranging from bold and expressive to delicate and refined—suitable for diverse styles and product categories.
Each design is delivered with a high-resolution digital file in editable format, allowing easy customisation and adaptation across garments and fabric types.
Ideal for designers, brands, and printing houses seeking ready-to-use prints with creative flexibility and commercial appeal.
English edition. Regularly updated.</h6> */}
    <Link className="shirt-card col-3" to="/print1">
    <div
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
    <Link className="shirt-card col-3 mb-5" to="/print2">
    <div
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
    <img
        src={hover ? img4 : img3}
        alt="shirt"
        className="shirt-image shirt-card col-3"
    />
    </div>
    </Link>
    <Link className="shirt-card col-3 mb-5" to="/print3">
    <div
    onMouseEnter={() => setHove(true)}
    onMouseLeave={() => setHove(false)}
    >
    <img
        src={hove ? img6 : img5}
        alt="shirt"
        className="shirt-image shirt-card col-3"
    />
    </div>
    </Link>
    <Link className="shirt-card col-3 mb-5" to="/print4">
    <div
    onMouseEnter={() => setshirt(true)}
    onMouseLeave={() => setshirt(false)}
    >
    <img
        src={shirt ? img8 : img7}
        alt="shirt"
        className="shirt-image shirt-card col-3"
    />
    </div>
    </Link>
    <Link className="shirt-card col-3 mb-5" to="/print5">
    <div
    onMouseEnter={() => setshirt5(true)}
    onMouseLeave={() => setshirt5(false)}
    >
    <img
        src={shirt5 ? img10 : img9}
        alt="shirt"
        className="shirt-image shirt-card col-3"
    />
    </div>
    </Link>
        <Link className="shirt-card col-3" to="#">
            <img src={ img11} alt="shirt" className="shirt-image shirt-card col-3 mb-5"/>
        </Link>
        <Link className="shirt-card col-3 mb-5"to="#">
            <img src={img12} alt="shirt" className="shirt-image shirt-card col-3"/>
        </Link>
        <Link  className="shirt-card col-3 mb-5"to="#">
            <img src={img13} alt="shirt" className="shirt-image shirt-card col-3 mb-5"/>
        </Link>
        
    </div>
);
}

export default Prints;