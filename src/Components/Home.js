import React, { Component } from 'react';
import homePic from '../images/loginPic.jpg';


export class Home extends Component {
    render() {
        return (
            <div className="homeDiv">
                <h1 className={"HomeTitle"}>Transformers-House</h1>
             <p className={"homeDescription"}>
             The Transformers House is a webshop robotics shop. <br/>
             Robot products can be advertised,<br/>
             new robots can be purchased. <br/>
             And all with the click of a button <br/>
             and the invitation on the way to you
             </p>
             <img src={homePic} alt={"transformers-home"}></img>
            </div>
        )
    }
}

export default Home
