import { Link } from 'react-router-dom'
import './Sidebar.css'
function Sidebar(){
    return(
        <div className='sidebar  text-dark pt-5 '>
            {/* <img className="side-img mb-5 mt-3" src={require('../images/logo.jpeg')}alt='img'/> */}
            <div className='px-5'>
                
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/shirts" >Shirts</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/trousers" >Trousers</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/suits" >Suits</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/knitting" >Knitting</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/womenswear" >Womens wear</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/menwear" >Menswear</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/kidswear" >kids wear</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/sportwear" >Sports wear</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/prints" >Prints</Link></h4>
            <h4><Link className='text-white link-underline link-underline-opacity-0' to="/exclusive" > Exclusive</Link></h4>
            </div>
            <div>
                <h6 className='note-side p-4 m-1 border rounded-pill mt-3'>FIND MODA ITALIA AT <br/>INTERNATIONAL TRADE FAIRS</h6>
            </div>
        </div>
    )
}
export default Sidebar