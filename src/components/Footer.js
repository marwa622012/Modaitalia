import { Link } from 'react-router-dom';
import './Footer.css'
function Footer(){
    return(
        <div className='row mx-0 footer pt-5'>
            <div className='col-md-4 '>
                <span><img className=' ms-5 footer-img' src={require('../images/sandy card final0.png')} alt='img'/></span>
            </div>
            <div className='col-md-7 ps-5 ms-lg-0 pt-2 '>
                <p><li><Link  className=" link-underline link-underline-opacity-0 text-white ms-4" to="/partner">OUR PARTNERS</Link></li></p> 
                <span>
                    <Link to="https://www.medesrl.it/en/meta-trend-milano-collections-spring-summer.html"  className=" pe-0 me-0" target="_blank">
                        <img src={require('../images/download.png')} alt="Partner 1" className="partner-footer" />
                    </Link>
                </span>
                <span>
                    <Link to="https://italtextrends.com/" className="w-50" target="_blank">
                        <img src={require('../images/Logo-b_180x (1).avif')} alt="Partner 2" className="bg-white partner-footer p-2 me-4" />
                    </Link>
                </span>
                <span>
                    <Link to="https://www.progettostile.net" className="w-50" target="_blank">
                    <img src={require('../images/LOGO PROGETTO STILE CARTA PAVONE.avif')} alt="Partner 3" className="partner-footer me-4" />
                </Link>
                </span>
                <span>
                    <Link to="https://www.modeinfo.com/en/By-Manufacturer/View/" className="w-50" target="_blank">
                    <img src={require('../images/logo.png')} alt="Partner 3" className="partner-footer me-4 ms-md-0 ms-4 " />
                </Link>
                </span>
                <span>
                    <Link to="https://www.biellatextiletrend.com/" className="w-50" target="_blank">
                    <img src={require('../images/1.avif')} alt="Partner 3" className="partner-footer bg-white " />
                </Link>
                </span>
            </div>
            {/* <div className='col-xl-3 col-lg-6 col-12 mb-5'>
            </div> */}
            <p className='rights mt-5 text-white'>2025 MODA ITALIA.All Rights Reserved.</p>
        </div>
        
    )    
}
export default Footer;
