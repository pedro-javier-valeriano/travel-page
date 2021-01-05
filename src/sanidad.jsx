import React from 'react'
 const Sanidad = ({description,image}) =>(
  <div className="col-xs-12 col-sm-6 col-md-4 mt-4">
            <div className="card">
              <img classNamer="card-img-top" src={image} alt="Card image cap"/>
              <div className="card-body">
                
                <p classNAme="card-text">{description}</p>
              </div>
            </div>
          </div>
          
         

 )
export default Sanidad