import React, { Component } from 'react';
import MenuItem from '../menu-item/Menu-item';
import './Directory.styles.scss';

class Directory extends Component {
  constructor(){
    super();
    this.state = {
      sections : [{
        title:'Suits',
        imageUrl: 'https://images.freeimages.com/images/large-previews/f78/fabric-2-1173476.jpg',
        id : 1
      },
      {
        title: 'Bedsheets',
        imageUrl: 'https://images.freeimages.com/images/large-previews/795/fabric-2-1174252.jpg',
        id : 2
      },
      {
        title: 'Jewellary',
        imageUrl: 'https://images.unsplash.com/photo-1578632297758-3a6c6de14be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        id : 3
      },
      {
        title: 'Decoration',
        imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        size:'large',
        id : 4
      },
      {
        title: 'Local',
        imageUrl: 'https://images.unsplash.com/photo-1506972905718-359e73c4c49a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        size:'large',
        id : 5
      }
    ]
    }
  }



  render(){
    return(
    <div className ="directory-menu">
     {this.state.sections.map(({title, id , imageUrl, size })=>
       <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>
     )}
    </div>
    )
  }
}
export default Directory;