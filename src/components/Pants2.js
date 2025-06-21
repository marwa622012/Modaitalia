import { useState } from 'react';
import './Pants1.css'

import shirt1 from '../images/pants/pant 2/cop_sport_and_street_ba336a11-0ff7-4d2d-bffb-d20fd6f88e0b_2048x2048.webp'; 
import shirt2 from '../images/pants/pant 2/sportstyle-1_2048x2048.webp'; 
import shirt3 from '../images/pants/pant 2/sportstyle-3_2048x2048.jpg'; 
import shirt4 from '../images/pants/pant 2/sportstyle-5_2048x2048.webp'; 
import shirt5 from '../images/pants/pant 2/sportstyle-6_2048x2048.webp'; 
import shirt6 from '../images/pants/pant 2/sportstyle-7_2048x2048.webp'; 
import shirt7 from '../images/pants/pant 2/sportstyle-8_2048x2048.webp'; 
import shirt8 from '../images/pants/pant 2/sportstyle-9_2048x2048.webp'; 


const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6,shirt7 ,shirt8]
function Pants1(){
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
        <p>
            The fashion trend book for fabrics and colours that satisfy the interest in men's trendy, city, sports and leisurewear shirts...
        </p>
        <p>
            Paper book in English with fabric swatches inserts. 104 pages.<br />
            Delivery: January 2025<br />
            Next edition: Spring/Summer 2026 (June 2025)
        </p>
        <button className="contact-button">Contact us</button>
        </div> */}
    </div>
    )
}
export default Pants1;