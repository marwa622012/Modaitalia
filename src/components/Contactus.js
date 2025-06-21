import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contactus.css'
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Contactus() {
    return (
        <div className="row form mx-0 my-5 py-5"> 
            <div className='col-md-1 col-2 fs-md-2 fs-4 pe-0'>
        <FontAwesomeIcon className='mb-5' icon={faLocationDot} /><br/>
        <FontAwesomeIcon className='mb-5' icon={faPhone} /><br/> 
        <FontAwesomeIcon className='mb-5' icon={faEnvelope} />
        </div>
        <div className='col-md-3 col-10 ps-0'>
            <h5 className='mb-5 fs-lg-5 fs-6'>6 El sheiekh Mohamed Salama St, El Hejaz St, Heliopolis, Cairo</h5>
            <h4 className='mb-5 fs-lg-4 fs-6\
            '>+20 12 86693375</h4>
            <h4 className='fs-lg-4 fs-6\
            '>heba.modaitalia@yahoo.com</h4>
            <div className='my-5'>
            <span>
                <Link
                    to="https://wa.me/20 12 86693375?text=welcome%20in%20moda%20italia"
                    className="whatsapp-button text-success me-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </Link>
            </span>
            <span>
                <Link className='me-5' to='https://www.facebook.com/modaitalia.tdc'>
                    <FontAwesomeIcon icon={faFacebook}  size="2x"/>
                </Link>
            </span>
            <span>
                <Link to='https://www.linkedin.com/in/heba-ahmed-bb199a10a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </Link>
            </span>
        </div>
        </div>
        
        <form
        action="https://formsubmit.co/heba.modaitalia@yahoo.com" // <-- استبدليه بالرابط بتاعك
        method="POST"
        className="  col-md-7 col-11">
        <input type="text" name="name" placeholder="Name" required className="w-100 mb-3 p-2 rounded border" />
        <input type="email" name="email" placeholder="Email" required className="w-100 mb-3 p-2 rounded border" />
        <textarea name="message" placeholder="Message" required className="w-100 mb-3 p-2 rounded border message" ></textarea>
        <button type="submit" className="p-2 border m-auto submit" >Send</button>
    </form>
        </div>
    )
}