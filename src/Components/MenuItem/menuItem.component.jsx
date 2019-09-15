import React from 'react';
import './menuItem.styles.sass';

const MenuItem = (props) => {
  return (
    <div className={`menu-item ${props.size}`}>
      <div className="backgroundImage" style={{

        backgroundImage: `url(${props.imageUrl})`
      }} />

      <div className="content-container">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">{props.subtitle}</span>
      </div>
    </div>
  )
}

export default MenuItem;