import shirt1 from '../images/Women Wear/5/next-look-women-tendenze-moda-donna-aw-25-26_1.jpg'; 
import shirt2 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.2_2.jpg'; 
import shirt3 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.3_2.jpg'; 
import shirt4 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.4_2.jpg'; 
import shirt5 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.5_2.jpg'; 
import shirt6 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.6_2.jpg'; 
import shirt7 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.7_2.jpg'; 
import shirt8 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio.8_2.jpg'; 
import shirt9 from '../images/Women Wear/5/next-look-women-trend-immagine-archivio._2.jpg'; 


import { useState } from 'react';

const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6,shirt7,shirt8,shirt9]
function Womenswear5(){
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
export default Womenswear5;