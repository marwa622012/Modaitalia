import './Btt.css'

import React, { useState } from 'react';

    import shirt1 from '../images/shirts/shirt 5/12d9de_a3dd3a95883949b4ab649e7eb92714cc~mv2.webp'; 
    import shirt2 from '../images/shirts/shirt 5/12d9de_040c425204dd46b99ded9954a885ca34~mv2.webp'; 
    import shirt3 from '../images/shirts/shirt 5/12d9de_240e72deefc14758bc63bc51b68e476e~mv2.webp'; 
    import shirt4 from '../images/shirts/shirt 5/12d9de_edbca5c92c4643d7bbe435ab1ff943ea~mv2.webp'; 
// import { Link } from 'react-router-dom';

    const image =[shirt1,shirt2,shirt3,shirt4 ]
function Btt(){
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
        <p>Circa 150 campioni di tessuti per camiceria. Un'opera essenziale per designer e appassionati di moda che vogliono scoprire le ultime tendenze e innovazioni nel mondo dei tessuti.</p>
        <Link to="/contact">        <button className="contact-button">Contact us</button></Link>
        </div> */}
    </div>
    )
}
export default Btt;