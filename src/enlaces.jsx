import React from 'react'
const Enalaces ={
  "title": "react desde cero"
}
const Enlaces = props => (
      <li className="nav-item active">
        <a className="nav-link" href="#">{props.title} <span class="sr-only">(current)</span></a>
      </li>
)
export default Enlaces