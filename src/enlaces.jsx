import React from 'react'

const Enlaces = ({title}) => (
      <li className="nav-item ">
        <a className="nav-link" href="#">{title} <span className="sr-only">(current)</span></a>
      </li>
)
export default Enlaces