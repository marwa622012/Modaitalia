import './Dressshirt.css'

import React, { useState } from 'react';

    import shirt1 from '../images/shirts/shirt 4/1.webp'; 
    import shirt2 from '../images/shirts/shirt 4/dressshirtss26_1_2048x2048.webp'; 
    import shirt3 from '../images/shirts/shirt 4/dressshirtss26_2_2048x2048.webp'; 
    import shirt4 from '../images/shirts/shirt 4/dressshirtss26_3_2048x2048.webp'; 
    import shirt5 from '../images/shirts/shirt 4/dressshirtss26_4_2048x2048.webp'; 
    import shirt6 from '../images/shirts/shirt 4/dressshirtss26_5_2048x2048.webp'; 
    import shirt7 from '../images/shirts/shirt 4/dressshirtss26_6_2048x2048.webp'; 
// import { Link } from 'react-router-dom';
    const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6,shirt7  ]
function Dressshirt (){
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

        {/* <div className="product-info mt-5 ms-5">
        <h1>SHIRT Autumn/Winter 2026/2027</h1>
        <p>The fashion trend book features the latest fabrics and colours for classic shirting for the Spring/Summer 2026 season.
        It is a careful selection of patterned, plain and faux plain shirting swatches for formal wear: small patterns, discrete checks, sober stripes and jacquards. 57 colours with Pantone® codes create a comprehensive and easy-to-use colour scheme.
        Paper book in English with fabric swatches inserts. 69 pages.
        The delivery of the volume for the Spring/Summer 2026 season is planned for June 2024.
        Next edition: Autumn/Winter 2026/2027 season, scheduled for February 2025. Biannual publications.</p>
        <Link to="/contact">        <button className="contact-button">Contact us</button></Link>
        </div> */}
    </div>
    )
}
export default Dressshirt