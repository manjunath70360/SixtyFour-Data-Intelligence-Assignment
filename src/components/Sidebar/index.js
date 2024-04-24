
import { GoSearch } from "react-icons/go";
import { LiaTvSolid } from "react-icons/lia";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoMdCalendar } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdHeadphones } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";


import "./index.css"

const sideIconList = [
  {iconName:"Search",icon:<GoSearch className='icon'/>},
  {iconName:"DashBoard",icon:<LiaTvSolid className='icon'/>},
  {iconName:"Q&A",icon:<HiOutlineQuestionMarkCircle className='icon'/>},
  {iconName:"Events",icon:<IoMdCalendar className='icon'/>},
  {iconName:"Analytics",icon:<HiOutlineBuildingOffice2 className='icon'/>},
  {iconName:"Earn",icon:<RiMoneyDollarCircleFill className='icon'/>},
  {iconName:"Audio Library",icon:<MdHeadphones className='icon'/>},
]

const Sidebar = () =>{

    return(
      <div className='app-container'>
          <div className='side-bar'>
            <div className='side-icon-btn logo-con'>
                <button type='button' className='logo-btn'><BiLogoGmail className='logo-icon' size={20}/></button>
                <p className='side-icon-name logo-name'>Manjunath</p>
            </div>
            <div className='icon-container'>
            <div className='side-icon-list'>
                  {sideIconList.map(eachIcon =>(
                    <button type="button"  className='side-icon-btn'>
                      {eachIcon.icon} 
                       <p className='side-icon-name'>{eachIcon.iconName}</p>
                    </button>
                  ))}
            </div>
            <button type="button" className='side-icon-btn'>
              <IoMdSettings className='icon'/>
               <p className='side-icon-name'>Setting</p>
            </button>
            </div>
          </div>
          
      </div>
    )
}  

export default Sidebar