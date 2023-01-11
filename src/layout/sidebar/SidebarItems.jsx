import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItems = ({title, icon, targetPath}) => {

  const navStyle =(isActive) =>{
    if(isActive){
      return {
        background : "rgb(69, 89, 114)"
      }
    }
  }


  return (
    <div  className="d-flex flex-column">
    <NavLink style={({isActive})=>navStyle(isActive)} to={targetPath}>
      <i className={`ms-3 ${icon} pe-3`}></i>
      {title}
    </NavLink>
  </div>
  )
}

export default SidebarItems