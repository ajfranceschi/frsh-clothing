import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuItem.styles.sass';

const MenuItem = ({
                    title,
                    imageUrl,
                    subtitle,
                    size,
                    history,
                    linkUrl,
                    match
}) => {
  return (
    <div className={`menu-item ${size}`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="backgroundImage" style={{

        backgroundImage: `url(${imageUrl})`
      }} />

      <div className="content-container">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);