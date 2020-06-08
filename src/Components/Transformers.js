import React, { Component } from 'react'
// import Button from 'react-bootstrap'
import robot1 from '../images/menba.jpg';
import robot2 from '../images/caros.jpg';
import robot3 from '../images/Heimamba.jpg';
import robot4 from '../images/ototil.jpg';
import robot5 from '../images/robey.jpg';
import robot6 from '../images/scorpotric.jpg';
import robot7 from '../images/serocs.jpg';
import robot8 from '../images/makoles.jpg';
import robot9 from '../images/lento.jpg';
import robot10 from '../images/yoles.jpg';
import robot11 from '../images/greenes.jpg';
import robot12 from '../images/redes.jpg';
import { Button } from '@material-ui/core';
import BuyTransformer from './BuyTransformer';
import ReactPlayer from "react-player"


export default class Transformers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TransformerName: "",
            transformerPrice:"",
            btnPressed: false
        };
        this.buyTransformer = this.buyTransformer.bind(this);
    }


    buyTransformer = (e) => {
     console.log(e.target)
        this.setState({
            TransformerName: e.target.value,
            btnPressed:true
        });
    };
    render() {

        return (
            <div className={"transformersDiv"}>
                <h1 className={"transformersTitle"}>Transformers</h1> 
                <div className="video-wrapper">
                <ReactPlayer
              playsInline
              playing = {true}
              fluid={false}
              width={480}
              height={272}
             url="https://www.youtube.com/watch?v=rFE88qiy5cw"
            />
            </div>
                <ul className={'robots'}>
                <li className={"robot"}> Menba 
                 <Button className={"btn"}  value="Menba" onClick={this.buyTransformer} 
                         style={{backgroundColor: '#867979', color: 'white', marginLeft: '20px'}}
                         > Buy 
                 </Button> 399$
                 <img alt={"robot1"} className={"robotPic"} src={robot1} /> 
                </li>
                <li className={"robot"}> Caros 
                 <Button className={"btn"} name={"Caros"}  onClick={this.buyTransformer} value={this} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 450$
                <img alt={"robot2"} className={"robotPic"} src={robot2} />
                 </li>
                <li className={"robot"}> Heimamba  
                 <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 370$ 
                 <img alt={"robot3"} className={"robotPic"} src={robot3} /> 
                 </li>
                <li className={"robot"}> Ototil  
                 <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 399$
                 <img alt={"robot4"} className={"robotPic"} src={robot4} /> 
                 </li>
                <li className={"robot"}> Robey  
                 <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 350$ 
                 <img alt={"robot5"} className={"robotPic"} src={robot5} /> 
                </li>
                <li className={"robot"}> Scorpotric  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 450$
                <img alt={"robot6"} className={"robotPic"} src={robot6} /> 
                </li>
                <li className={"robot"}> Serocs  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 439$
                <img alt={"robot7"} className={"robotPic"} src={robot7} /> 
                </li>
                <li className={"robot"}> Makoles  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 420$
                <img alt={"robot8"} className={"robotPic"} src={robot8} /> 
                </li>
                <li className={"robot"}> Lento  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 399$
                <img alt={"robot9"} className={"robotPic"} src={robot9} /> 
                </li>
                <li className={"robot"}> Yoles  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 350$
                <img alt={"robot10"} className={"robotPic"} src={robot10} /> 
                </li>
                <li className={"robot"}> Grunes  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 350$
                <img alt={"robot11"} className={"robotPic"} src={robot11} /> 
                </li>
                <li className={"robot"}> Redes  
                <Button className={"btn"} style={{backgroundColor: '#867979', color: 'white',  marginLeft: '20px'}}> Buy</Button> 350$
                <img alt={"robot12"} className={"robotPic"} src={robot12} /> 
                </li>
                </ul>
                 {this.state.btnPressed ? <BuyTransformer selected={this.props}/> : null}
            </div>
        )
    }
}
