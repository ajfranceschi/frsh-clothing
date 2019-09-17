import React from 'react';
import MenuItem from "../MenuItem/menuItem.component";
import './directory.styles.sass'

export default class Directory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [{
        title:'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id:1,
        linkUrl: 'hats'
      },{
        title:'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl: ''
      },{
        title:'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkUrl: ''
      },{
        title: "women's",
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id:4,
        linkUrl: ''
      },{
        title:"men's",
        imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
        size: 'large',
        id:5,
        linkUrl: ''
      }]
    }
  }
  render() {
    // REGULAR WAY (NOT USING ES6 SPREAD OPERATOR
    // return (
    //   <div className="directory-menu">
    //     {this.state.sections.map(({id, title, imageUrl, size, linkUrl}) => {
    //       return (
    //         <MenuItem title={title} imageUrl={imageUrl} key={id} subtitle={'SHOP NOW'} size={size} linkUrl={linkUrl}/>
    //       )
    //     })}
    //
    //   </div>
    // )

  //  USING ES6 SPREAD OPERATOR
    return(
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => {
          return (
            <MenuItem key={id} {...otherSectionProps}/>
          )
        })}
      </div>
    )

  }
}