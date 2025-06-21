import shirt1 from '../images/Suits/Suit 5/12d9de_d289803eba924adfaf58cc59d0d64c62~mv2.webp'; 
import shirt2 from '../images/Suits/Suit 5/12d9de_a93ff49c171f43a79affb438f8c7fe80~mv2.webp'; 
import shirt3 from '../images/Suits/Suit 5/12d9de_1510a9139a8444f0aa7165a6ac6b7a24~mv2.webp'; 
import shirt4 from '../images/Suits/Suit 5/12d9de_e4b5040168504d5bae6c46d9ac54b456~mv2.webp'; 
// import shirt6 from '../images/Suits/Suit 1/drapperia2627_5_2048x2048.webp'; 
// import shirt7 from '../images/Suits/Suit 1/drapperia2627_6_2048x2048.webp'; 

import { useState } from 'react';

const image =[shirt1,shirt2,shirt3,shirt4  ]
function Suit2(){
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
export default Suit2;