const config = require('./config.json');
import React from "react";
import styles from './Greeter.css';

export default class Greeter extends React.Component{
    render(){
        return(
            <div className = {styles.root}>
                {config.greetText}
                <div>改了点东西</div>
                <div>又改了点东西</div>
            </div>
        )
    }
}