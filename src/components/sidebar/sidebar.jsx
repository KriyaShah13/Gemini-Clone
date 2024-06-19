import React, {useState} from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const sidebar = () => {
  const [extended,setExtended] = useState(false);
  return (
    <div className='sidebar'>
       <div className="top">
        <img className='menu' src={assets.menu_icon}alt="" />
        <div className="New Chat">
           <img src="{assets.plus_icon" alt="" />
           {extended? <p>New Chat</p> : null}
        </div>
        { extended
        ? 
        <div className="recent">
        <p className="recent-tittle">Recent</p>
        <div className="recent-entry">
          <img src="{assets.message-icon}" alt="" />
          <p>What is React...?</p>
        </div>
      </div>
      : null
        }
       
        
       </div>
       <div className="bottom">
        <div className="bottom-item recent-entry ">
          <img src="{assets.question_icon" alt="" />
         {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry ">
          <img src="{assets.history_icon" alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry ">
          <img src="{assets.settings_icon" alt="" />
          {extended ? <p>Settings</p> : null }
        </div>
       </div>
    </div>
  )
}

export default sidebar