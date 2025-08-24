// export default function International() {
//     return(
//         <div>
//             <h2 className="text-center text-primary-emphasis mt-3">International Exhibition Partnerships</h2>
//             <div className="ms-sm-5 ms-5 ps-sm-5  mt-4">
//                 <h3 className="text-primary-emphasis">Who We Are</h3>
//                 <p className="fw-semibold">At MODA ITALIA, we believe in the power of global visibility and strategic networking. That’s why we proudly collaborate with leading international textile and fashion trade shows, offering our clients exceptional opportunities to expand their reach and showcase their products to targeted buyers and industry professionals.</p>
//                 <h3 className="text-primary-emphasis mt-5">We are official partners of renowned international exhibitions such as:</h3>  
//                 <h5>SAUDI FASHION & TEX EXPO</h5>  
//                 <p>The premier fashion and textile event in Saudi Arabia, held in Jeddah, connecting the Middle Eastern market with global suppliers and manufacturers.</p>
//                 <h5>PTAK FAST TEXTILE EXPO</h5>
//                 <p>The largest textile fair in Central and Eastern Europe, held in Poland, focused on sourcing, innovation, and B2B connections.</p>
//                 <h5>INTERNATIONAL APPAREL TREND EXPO – TRENDS EXPO</h5>
//                 <p className="mb-5 pb-2">A key event dedicated to trend forecasting and fashion innovation, bringing together creative visionaries, fabric specialists, and global buyers.</p>
//                 <h3 className="text-primary-emphasis">Through these partnerships, MODA ITALIA offers:</h3>
//                 <p>Exclusive exhibition opportunities for manufacturers, suppliers, and design studios.</p>
//                 <p>Local and international support before, during, and after each event.</p>
//                 <p>Personalized consultancy to select the right fair and maximize visibility.</p>
//                 <p>Assistance with booth reservation, setup, and targeted promotion.</p>
//                 <p>Join us and take your business to the global stage.</p>
                
//             </div>
            
//         </div>
//     )
// }
export default function International() {
    return (
        <div className="container">
            <h2 className="text-center text-primary-emphasis mt-3">International Exhibition Partnerships</h2>
                
            <div className="ms-sm-5 ms-5 ps-sm-5  mt-4">
                <h3 className="text-primary-emphasis">Who We Are</h3>
                <p className="fw-semibold">
                    At MODA ITALIA, we believe in the power of global visibility and strategic networking.
                    That’s why we proudly collaborate with leading international textile and fashion trade shows,
                    offering our clients exceptional opportunities to expand their reach and showcase their products
                    to targeted buyers and industry professionals.
                </p>
                <h3 className="text-primary-emphasis mt-5">We are official partners of renowned international exhibitions such as:</h3>
                <h5>SAUDI FASHION & TEX EXPO</h5>
                <p>The premier fashion and textile event in Saudi Arabia, held in Jeddah, connecting the Middle Eastern market with global suppliers and manufacturers.</p>
                <h5>PTAK FAST TEXTILE EXPO</h5>
                <p>The largest textile fair in Central and Eastern Europe, held in Poland, focused on sourcing, innovation, and B2B connections.</p>
                <h5>INTERNATIONAL APPAREL TREND EXPO – TRENDS EXPO</h5>
                <p className="mb-5 pb-2">A key event dedicated to trend forecasting and fashion innovation, bringing together creative visionaries, fabric specialists, and global buyers.</p>
                <h3 className="text-primary-emphasis">Through these partnerships, MODA ITALIA offers:</h3>
                <p>Exclusive exhibition opportunities for manufacturers, suppliers, and design studios.</p>
                <p>Local and international support before, during, and after each event.</p>
                <p>Personalized consultancy to select the right fair and maximize visibility.</p>
                <p>Assistance with booth reservation, setup, and targeted promotion.</p>
                <p>Join us and take your business to the global stage.</p>
            </div>


            <div className="container">
                <h3 className="text-center text-primary-emphasis mb-4">Download Our Flyers</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm text-center p-3">
                            {/* <img src="/images/pdf-icon.png" alt="PDF Icon" style={{ width: '50px', margin: '10px auto' }} />
                            <h5 className="mb-3">Fast Textile</h5>
                            <img src="/images/fashion-expo.jpg" alt="Fast Textile" className="img-fluid rounded mb-3" /> */}
                                <img src={require('../images/0ed2b7b7-a2af-4c60-ad4e-9e832ed6ea0e.jpeg')} alt="Fast Textile" className="img-fluid rounded mb-3" />
                            <div>
                                <a href="/FAST TEXTILE A4 -ENG 0 (2).pdf" target="_blank" className="btn btn-danger me-2">View PDF</a>
                                <a href="/FAST TEXTILE A4 -ENG 0 (2).pdf" download className="btn btn-outline-danger">Download</a>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm text-center p-3">
                            {/* <img src="/images/pdf-icon.png" alt="PDF Icon" style={{ width: '50px', margin: '10px auto' }} />
                            <h5 className="mb-3">FLYER_SAUDIFASHION&TEX</h5> */}
                            <div className='d-flex flex-wrap'>
                            <img src={require('../images/saudi2.png')} alt="Saudi Fashion Expo" className="img-fluid rounded mb-3" />
                            {/* <img src={require('../images/saudi.png')} alt="Saudi Fashion Expo" className="img-fluid rounded mb-3" style={{ width: '400px',height:'400px' }}/> */}
                            </div>
                            <div>
                                <a href="/FLYER_ SFTE (1).pdf" target="_blank" className="btn btn-danger me-2">View PDF</a>
                                <a href="/FLYER_ SFTE (1).pdf" download className="btn btn-outline-danger">Download</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
