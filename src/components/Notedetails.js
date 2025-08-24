import { Link } from 'react-router-dom'
import './Notedetails.css'
export default function Notedetails() {
    return(
        <div className="note-details mt-3">
            <Link to="/note" target="_blank"></Link>
            <div className='d-flex justify-content-between'>
                <div><img className='imagenote' src={require('../images/logo.jpeg')} alt='img'/></div>
                <div className=' text-note fw-bold text-center'>
                    <h4>SAUIDI FASHION & TEX EXPO</h4>
                    <h4>25 - 28 September 2025</h4>
                    <h4>STAND NO. R-13</h4>
                </div>
                <div className='image-saudi'>
                <Link  to="https://saudifashiontexexpo.com/" target="_blank">
                    <img className='' src={require('../images/logo saudi.png')} alt="Fashion Expo" style={{ width: '65%', borderRadius: '10px' }} />
                </Link>
                </div>
            </div>
            <h2 className='text-center mt-4' style={{ color: ' #f47226' }}>INVITATION TO VIST OUR STAND</h2>
            <h3 className='text-center mt-3'>DISCOVER THE LATEST TEXTILE<br/>&STYLING TREND BOOKS <br/>FROM ITALY & GERMANY</h3>
            {/* <h2 className='text-center'>&STYLING TREND BOOKS</h2> */}
            {/* <h2 className='text-center'>FROM ITALY & GERMANY </h2> */}
            <h5 className='mt-3 fw-semibold text-center font-monospace'>Exclusive Professional for fabric and garment suppliers<br/>-including Shirting,Kintwear,Suits,Jckets,Pants,Sportswear,<br/>menswear,womenwear and Kidswear</h5>
            <div className='d-flex justify-content-between mt-5 mx-5 px-5'>
                <h4>heba.modaitalia@yahoo.com</h4>
                <h4>www.modaitalia.netfly.app</h4>
            </div>
        </div>
    )
}