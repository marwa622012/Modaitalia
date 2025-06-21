import './Dobbyshirt.css'
import 'react-image-lightbox/style.css';

import React, { useState } from 'react';

    import shirt1 from '../images/shirts/shirt 2/copert_dobby_shirt_26_27_2048x2048.webp'; 
    import shirt2 from '../images/shirts/shirt 2/Dobby_1_2048x2048.webp'; 
    import shirt3 from '../images/shirts/shirt 2/Dobby_2_2048x2048.webp'; 
    import shirt4 from '../images/shirts/shirt 2/Dobby_3_2048x2048.webp'; 
    import shirt5 from '../images/shirts/shirt 2/Dobby_4_2048x2048.webp'; 
    import shirt6 from '../images/shirts/shirt 2/Dobby_5_2048x2048.webp'; 
    import shirt7 from '../images/shirts/shirt 2/Dobby_7_2048x2048.webp'; 
import Lightbox from 'react-image-lightbox';
// import { Link } from 'react-router-dom';

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
            const [photoIndex, setPhotoIndex] = useState(0);
            const [isOpen, setIsOpen] = useState(false);
        
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
            The fashion trend book for fabrics and colours that satisfies the growing interest in classic shirts, enhanced with effects that make them unique and sophisticated, for the Autumn/Winter 2026/2027 season.
            To realise this, the most representative trending fabrics were selected, and a specific colour card containing Pantone® reference codes was added.
            Paper notebook in English with fabric swatches inserts. 51 pages.
            The delivery of the volume for the Autumn/Winter 2026/2027 season is planned for January 2025.
            Next edition: Spring/Summer 2027 season, scheduled for July 2025. Biannual publications.
        </p>
        <Link to="/contact"><button className="contact-button">Contact us</button></Link>
        </div> */}
        {isOpen && (
        <Lightbox
        mainSrc={image[photoIndex]}
        nextSrc={image[(photoIndex + 1) % image.length]}
        prevSrc={image[(photoIndex + image.length - 1) % image.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + image.length - 1) % image.length)
        }
        onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % image.length)
        }
        />
    )}
    </div>

    )
}
export default Doppyshirt;