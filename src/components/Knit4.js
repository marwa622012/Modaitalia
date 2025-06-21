import shirt1 from '../images/knit/knit 4/mi187_mode_modeinformation_modeinfo.jpg'; 
import shirt2 from '../images/knit/knit 4/mi187_mode_modeinformation_modeinfo_1.jpg'; 
import shirt3 from '../images/knit/knit 4/mi187_mode_modeinformation_modeinfo_2.jpg'; 
import shirt4 from '../images/knit/knit 4/mi187_mode_modeinformation_modeinfo_3.jpg'; 
import shirt5 from '../images/knit/knit 4/mi187_mode_modeinformation_modeinfo_4.jpg'; 

import { useState } from 'react';

const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5 ]
function Knit4(){
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
export default Knit4;