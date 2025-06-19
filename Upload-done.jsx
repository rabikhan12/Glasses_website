import React, { Component } from 'react'

export default class Desktop7 extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="top-row">
      <button className="btn7">Quit</button>
       </div>
    </div>
      <div className="top-right">
        <button className="btn8">Save</button>
        <button className="btn8">Skip</button>
    
    </div>
    <div className="image-box">
      <img src="d7.png" alt="Face" className="face-img"/>
    </div>  
    <div className="bottom-row">
      <button className="btn9">Reset</button>
      <button className="btn9">Previous</button>
      <button className="btn9">Next</button>
    </div>
  </div>

 
    
    )
  }
}
