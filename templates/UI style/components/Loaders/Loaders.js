import React from 'react';
import './Loaders.css';
import { theme } from '../Theme';

const lightModeColor = theme("light")
const darkModeColor = theme("dark")

export function Loader1(props) {
    const {diameter, theme } = props;
    const width = diameter;
    const height = diameter;
    const margin = diameter*2;
    if (theme === "light")
        return (
            <div className='r1-container-light' style={{background: lightModeColor, margin: margin}}>
                <div className='ripple1' style={{background: lightModeColor, width: width, height: height}}></div>
                <div className='ripple2' style={{background: lightModeColor, width: width, height: height}}></div>
                <div className='ripple3' style={{background: lightModeColor, width: width, height: height}}></div>
            </div>
        );
    else
        return (
            <div className='r1-container-dark' style={{background: darkModeColor, margin: margin}}>
                <div className='ripple1' style={{background: darkModeColor, width: width, height: height}}></div>
                <div className='ripple2' style={{background: darkModeColor, width: width, height: height}}></div>
                <div className='ripple3' style={{background: darkModeColor, width: width, height: height}}></div>
            </div>
        );
}