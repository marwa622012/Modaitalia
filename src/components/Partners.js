import { Link } from 'react-router-dom';
import './Partners.css'
export default function Partners() {
    return (
        <div className="container">
            <h1 className="text-center my-5">Our Partners</h1>
            <div className="row">
                <Link to="https://www.medesrl.it/en/meta-trend-milano-collections-spring-summer.html"  className="col-10 partner mb-4" target="_blank">
                    <img src={require('../images/download.png')} alt="Partner 1" className=" part3 m-auto mt-3" />
                </Link>
                <Link to="https://italtextrends.com/" className="col-10 partner mb-4" target="_blank">
                    <img src={require('../images/Logo-b_180x (1).avif')} alt="Partner 2" className="part4 m-auto pt-4 " />
                </Link>
                <Link to="https://www.progettostile.net" className="col-10 partner mb-4" target="_blank">
                    <img src={require('../images/LOGO PROGETTO STILE CARTA PAVONE.avif')} alt="Partner 3" className=" part m-auto " />
                </Link>
                <Link to="https://www.modeinfo.com/en/By-Manufacturer/View/" className="col-10 partner mb-4" target="_blank">
                    <img src={require('../images/logo.png')} alt="Partner 3" className=" part1 m-auto " />
                </Link>
                <Link to="https://www.biellatextiletrend.com/" className="col-10 partner mb-4" target="_blank">
                    <img src={require('../images/1.avif')} alt="Partner 3" className=" part2 m-auto " />
                </Link>
            </div>
        </div>
    );
}