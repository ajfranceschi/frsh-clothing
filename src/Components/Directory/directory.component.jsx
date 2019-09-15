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
        id:1
      },{
        title:'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id:2
      },{
        title:'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3
      },{
        title: "women's",
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id:4
      },{
        title:"men's",
        imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
        size: 'large',
        id:5
      }]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, title, imageUrl, size}) => {
          return (
            <MenuItem title={title} imageUrl={imageUrl} key={id} subtitle={'SHOP NOW'} size={size}/>
          )
        })}

      </div>
    )
  }
}