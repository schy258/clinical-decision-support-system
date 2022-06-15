import React from 'react'
import {Link,Outlet} from 'react-router-dom'

// in this component i make our navbar to switch from main page to Data form and Data form2 

export default function Navbar() {
  return (
    <nav id='qwer' className="navbar navbar-expand-lg  text-primary" >
  <Link className="navbar-brand text-light" to="" style={{marginLeft:"20px"}}>HEALTH-APP </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle text-success" to="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          PATIENT FORM
        </Link>
        <div className="dropdown-menu text-dark bg-success" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item text-light" to="/data1">DATA FORM 1</Link>
          <Link className="dropdown-item text-light" to="/data2">DATA FORM 2</Link>
        </div>
      </li>
    </ul>
  </div>
<Outlet/>
</nav>
    )
}
