import { useState } from 'react';
import './Pants1.css'

import shirt1 from '../images/pants/pant 1/coper_TROUSER_2048x2048.webp'; 
import shirt2 from '../images/pants/pant 1/trousering_830-1_2048x2048.webp'; 
import shirt3 from '../images/pants/pant 1/trousering_830-2_2048x2048.webp'; 
import shirt4 from '../images/pants/pant 1/trousering_830-3_2048x2048.webp'; 
import shirt5 from '../images/pants/pant 1/trousering_830-4_2048x2048.webp'; 
import shirt6 from '../images/pants/pant 1/trousering_830-5_2048x2048.webp'; 
import shirt7 from '../images/pants/pant 1/trousering_830-6_2048x2048.webp'; 
// import { Link } from 'react-router-dom';

const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6,shirt7  ]
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
{/* 
        <div className="product-info mt-5 ms-5">
        <h1>TROUSERING Spring/Summer 2025</h1>
        <p>Fabric trend book for Spring/Summer 2025 on sports and city trousers in cotton and various fibre combinations for menswear and womenswear. It includes: color trends with Pantone® reference numbers, actual swatches and photos of key garments.
<br/>2 Books – 1 Year
<br/>1 Book – 1 Season
<br/>DELIVERY:
<br/>August - Summer season
February - Winter season</p>
<Link to="/contact"><button className="contact-button">Contact us</button></Link>
        </div> */}
    </div>
    )
}
export default Pants1;