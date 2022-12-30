import React from 'react'

const SidebarItems = ({title, icon}) => {
  return (
    <div className="d-flex flex-column">
    <a href="#">
      <i className={`ms-3 ${icon} pe-3`}></i>
      {title}
    </a>
  </div>
  )
}

export default SidebarItems