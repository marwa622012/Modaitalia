import './Shirtdetails.css'
import React, { useState } from 'react';

    import shirt1 from '../images/shirts/shirt 1/copertshirt26_27_720x.webp'; 
    import shirt2 from '../images/shirts/shirt 1/Shirt_1_2048x2048.webp'; 
    import shirt3 from '../images/shirts/shirt 1/Shirt_2_2048x2048.webp'; 
    import shirt4 from '../images/shirts/shirt 1/Shirt_3_2048x2048.webp'; 
    import shirt5 from '../images/shirts/shirt 1/Shirt_5_2048x2048.webp'; 
    import shirt6 from '../images/shirts/shirt 1/Shirt_6_2048x2048.webp'; 
    import shirt7 from '../images/shirts/shirt 1/Shirt_7_2048x2048.webp'; 
// import { Link } from 'react-router-dom';




const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6 ,shirt7 ]
function Shirtdetails (){
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

        {/* <div className="product-info mt-5 ms-5"> */}
        {/* <h1>SHIRT Autumn/Winter 2026/2027</h1> */}
        {/* <p>
            The fashion trend book for fabrics and colours that satisfy the interest in men's trendy, city, sports and leisurewear shirts, enhanced with effects that make them unique and sophisticated, for the Autumn/Winter 2026/27 season.
            It shows the new trends in colours, fibres, yarns, constructions and patterns for yarn-dyed fabrics in cotton, linen and blends.
            To realise this, the most representative trending fabrics were selected, and a specific colour card containing Pantone® reference codes was added.
            Paper book in English with fabric swatches inserts. 104 pages.  
            The delivery of the volume for the Autumn/Winter 2026/27 season is planned for January 2025.
            Next edition: Spring/Summer 2026 season, scheduled for June 2025. Biannual publications.
        </p> */}
        {/* <p>
            The fashion trend book for fabrics and colours that satisfy the interest in men's trendy, city, sports and leisurewear shirts...
        </p>
        <p>
            Paper book in English with fabric swatches inserts. 104 pages.<br />
            Delivery: January 2025<br />
            Next edition: Spring/Summer 2026 (June 2025)
        </p> */}
        {/* <Link to="/contact">
                    <button className="contact-button">Contact us</button>
        </Link> */}
        {/* </div> */}
    </div>
    );
}

export default Shirtdetails;