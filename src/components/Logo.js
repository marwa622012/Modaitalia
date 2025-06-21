import './Logo.css'
function Logo (){
    return(
        <div className=''>
            <img className=' image' src={require('../images/logo.jpeg')} alt='img'/>
        </div>
    )
}
export default Logo;