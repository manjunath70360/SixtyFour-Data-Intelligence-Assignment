import {Component} from 'react'

import Sidebar from '../Sidebar'
import Card from '../card';
import RecentReleases from '../Recent';

import { FaRegCalendar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCreditCard2FrontFill } from "react-icons/bs";

import "./index.css"

const currentDate = new Date();

const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedDate = day + ' ' + monthNames[monthIndex];
const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}`;


function formatNumber(number) {
  return number < 10 ? '0' + number : number;
}

const savedLibraryList = [
  {icon: <BsCreditCard2FrontFill  className='sky-icon'/>, libraryName:"My Saved Library 1"},
  {icon: <BsCreditCard2FrontFill  className='violet-icon'/>, libraryName:"My Saved Library 2"},
  {icon: <BsCreditCard2FrontFill  className='red-icon'/>, libraryName:"My Saved Library 3"},
  {icon: <BsCreditCard2FrontFill  className='orange-icon'/>, libraryName:"My Saved Library 4"},
  {icon: <BsCreditCard2FrontFill  className='green-icon'/>, libraryName:"My Saved Library 5"}




]

class Home extends Component{


  render(){
   
    return(
      <div className='app-container'>
          <Sidebar />
          <div className='content-container'>
                <div className='top-section'>
                  <div>
                        <h2 className='greet'>Good Afternoon, Manjunath</h2>
                        <p className='greet-description'>You are subscribed to Retail plan.</p>
                  </div>
                  <div className='date-time-container'>
                    <div className='date-icon'>
                        <FaRegCalendar className='date-icon'/>
                        <p className='date'>Today, {formattedDate}</p>
                        <MdAccessTime className='time-icon'/>
                        <p className='date'>{formattedTime}</p>
                        
                    </div>
                    <IoMdNotificationsOutline className='notif'/>
                    
                  </div>
                </div>
                <div className='main-container'>
                    <ul className='saved-list'>
                      {savedLibraryList.map(eachItem =>(
                        <li className='saved-item'>
                          {eachItem.icon}
                          <h3 className='saved-text'>{eachItem.libraryName}</h3>
                          <p className='saved-date'>dd-mm-yyyy</p>
                        </li>
                      ))}
                    </ul>
                    <div className='card-reacent-container'>
                    <Card />
                    <RecentReleases />
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

export default Home