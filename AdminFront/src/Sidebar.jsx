import './Sidebar.css'
import {RxUpdate} from 'react-icons/rx'
import {FiSettings,FiLogOut} from 'react-icons/fi'
import {BiSolidDashboard} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'
import {AiOutlineHome} from 'react-icons/ai'
const SideBar = ()=> {
   return (
      <div className="sideBar">
         <div className='dashboard'>
           <BiSolidDashboard className='logo'/>
            <h3> Dashboard</h3>
         </div>
         <div className="home">
            <AiOutlineHome className='logo'/>
            <p>Home</p>
            </div>
         <div className="addCar">
            <IoIosAdd className='logo'/>
            <p>Add New</p>
         </div>
         <div className="addCar">
            <RxUpdate className='logo'/>
            <p>Update</p>
         </div>
         <div className="settings">
            <FiSettings className='logo'/>
            <p>Settings</p>
         </div>
         <div className="logout">
            <FiLogOut className='logo'/>
            <p>Log out</p>
         </div>
         
      </div>
   )
}
export default SideBar