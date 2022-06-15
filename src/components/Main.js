import React from 'react';
import logo from '../Assests/logo.png';


// my page which shows as a homepage
export default function Main() {
  return (
    <div>
        <img style={{display: "block",
  // marginRight: "auto",
  marginLeft: "70px",
  width: "30%",
  opacity:"0."
  }} src={logo} alt="" />
        <h6 style={{
            textAlign:"left",
        }} id='abcc'>What does a clinical decision support system do?
        Clinical decision support (CDS) provides clinicians, staff, patients or other individuals with knowledge and person-specific information, intelligently filtered or presented at appropriate times, to enhance health and health care. CDS encompasses a variety of tools to enhance decision-making in the clinical workflow</h6>
    </div>
  )
}
