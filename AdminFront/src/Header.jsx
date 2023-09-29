import './Header.css'
import {GoSun} from 'react-icons/go'
import image from './images/1.png'
const Header = ()=> {
   return (
      <header>
         <div className="userAbout">
            <img src={image} alt='owner'/>
            <span>Kelvin Macharia</span>
         </div>
         <div className="preferences">
    <GoSun/>
         <p>dhdhdhd</p>
         </div>
      </header>
   )
}
export default Header