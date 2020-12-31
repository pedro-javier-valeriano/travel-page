import React from 'react'
 
 const Fotos =({image,title}) => (
      <div className="carousel-item active">
         <img src={image} className="d-block w-100" alt={title}/>
       </div>
 )
 export default Fotos