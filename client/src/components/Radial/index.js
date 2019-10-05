import React, { Component } from 'react'
import "./radial.css"

export default class Radial extends Component {
    render() {
        return (
            <div className="rad-wrap">
                <span><button className="btn-select" id="left-btn">&#60;</button></span>
                <span className="btn-display">
                    <img src="../assets/images/aquila.png" alt="imperial aquila"></img>
                    <img src="../assets/images/aquila.png" alt="chaos star"></img>
                </span>
                <span><button className="btn-select" id="right-btn">&#62;</button></span>
            </div>
        )
    }
}
