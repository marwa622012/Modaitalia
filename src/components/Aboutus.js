import './Aboutus.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Aboutus(){
    useEffect(() => {
        Aos.init({
        duration: 1000,
        once: true, 
        });
    }, []);
    return(
        <div className='mx-0 mt-5 row'>
            {/* <div className='col-2'><img className='span' src={require('../images/bg-footer.jpeg')} alt='logo' data-aos="fade-right"/></div> */}
            <div className='col-8 ms-5'data-aos="fade-left">
            <h4>About Us ('MODA ITALIA - Your Strategic Partner in Textiles & Fashion')</h4>
            <p>Founded in 2015 and based in Egypt<br/> MODA ITALIA is a leading agency specializing in textile design, fabric sourcing, and garment production.<br></br> We serve as a vital link between garment manufacturers, weaving mills, and internationally renowned<br/> Italian and German textile designers.</p>
            <h4>Our Mission</h4>
            <p>At MODA ITALIA, we are committed to delivering high-quality fabrics and finished products, ensuring that<br/> our clients have access to innovative designs, competitive pricing, and tailored solutions to meet their<br/> specific needs.</p>
            <h4>Our Expertise</h4>
            <p>We work with producers of garments and fabrics for a wide range of categories, including:</p>
            <ul>
                <li>✔ Shirts</li>
                <li>✔ T-shirts</li>
                <li>✔ Pants</li>
                <li>✔ Jackets</li>
                <li>✔ Suits</li>
                <li>✔ Jeans</li>
                <li>✔ Denim for both men s and women s fashion</li>
            </ul>
            <h4>Why Choose MODA ITALIA? </h4>
                <p>✔ Strategic Sourcing & Customization - We have privileged partnerships with leading fabric mills and garment factories, ensuring customized solutions tailored to your requirements.
                <br/>✔ Cost & Time Efficiency - Thanks to Egypt’s geographic proximity to Europe, we offer reduced transportation times and eliminate additional costs such as customs duties and taxes.
                <br/>✔ Strong Industry Connections - As agents for top Italian and German textile designers, we provide direct access to the latest trends and high-quality materials.</p>
                <h4>Let’s Collaborate!</h4>
                <p>Whether you’re a fashion brand, a garment manufacturer, or a fabric producer, MODA ITALIA is your ideal partner for innovation, quality, and efficiency.Contact us today to explore how we can support your business with our expertise and exclusive network</p>
            </div>
        </div>
    )
}
export default Aboutus;