import './Overshirt.css'
import React, { useState } from 'react';

    import shirt1 from '../images/shirts/shirt 3/copert_overcheck_f214431f-fe63-4186-8461-a3691b811b8c_2048x2048.webp'; 
    import shirt2 from '../images/shirts/shirt 3/overchecks_10_2048x2048.webp'; 
    import shirt3 from '../images/shirts/shirt 3/overchecks_1_2048x2048.webp'; 
    import shirt4 from '../images/shirts/shirt 3/overchecks_6_2048x2048.webp'; 
    import shirt5 from '../images/shirts/shirt 3/overchecks_8_2048x2048.webp'; 
    import shirt6 from '../images/shirts/shirt 3/overchecks_9_2048x2048.jpg'; 
// import { Link } from 'react-router-dom';
    const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6  ]

function Overshirt (){
        const [currentIndex, setCurrentIndex] = useState(0);
        const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % image.length);
        };
        const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + image.length) % image.length);
        };
        const selectImage = (index) => {
        setCurrentIndex(index);
        };
    return(
        <div className="product-container all-part">
        <div className="image-gallery">
        <button className="arrow left fs-3" onClick={prevImage}>‹</button>
        <img className="main-image" src={image[currentIndex]} alt="Product" />
        <button className="arrow right fs-3" onClick={nextImage}>›</button>
        <div className="thumbnails">
            {image.map((img, index) => (
            <img
                key={index}
                className={`thumb ${index === currentIndex ? 'active' : ''}`}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => selectImage(index)}
            />
            ))}
        </div>
        </div>
{/* 
        <div className="product-info mt-5 ms-5">
        <h1>SHIRT Autumn/Winter 2026/2027</h1>
        <p>
            The fashion trend book specific for overshirt fabrics for the Autumn/Winter 2026/27 season is the result of the strong trend towards a sporty and comfortable style, which led to the development of new qualities and shapes. A style mainly made up of wide-repeat checks and plaids, as well as smaller patterns and special constructions, interpreted in the trendiest colours.
            Paper notebook in English with fabric swatches inserts. 63 pages.
            The delivery of the volume for the Autumn/Winter 2026/2027 season is planned for January 2025.
            Next edition: Autumn/Winter 2027/2028 season, scheduled for February 2026. Annual publications.
        </p>
        <Link to="/contact"> <button className="contact-button">Contact us</button></Link>
        </div> */}
    </div>
    )
}
export default Overshirt;