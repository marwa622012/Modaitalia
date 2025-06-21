import './Dobbyshirt.css'

import React, { useState } from 'react';

    import shirt1 from '../images/shirts/shirt 2/copert_dobby_shirt_26_27_2048x2048.webp'; 
    import shirt2 from '../images/shirts/shirt 2/Dobby_1_2048x2048.webp'; 
    import shirt3 from '../images/shirts/shirt 2/Dobby_2_2048x2048.webp'; 
    import shirt4 from '../images/shirts/shirt 2/Dobby_3_2048x2048.webp'; 
    import shirt5 from '../images/shirts/shirt 2/Dobby_4_2048x2048.webp'; 
    import shirt6 from '../images/shirts/shirt 2/Dobby_5_2048x2048.webp'; 
    import shirt7 from '../images/shirts/shirt 2/Dobby_7_2048x2048.webp'; 


    const image =[shirt1,shirt2,shirt3,shirt4 ,shirt5,shirt6,shirt7  ]
function Doppyshirt(){
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
    </div>

    )
}
export default Doppyshirt;