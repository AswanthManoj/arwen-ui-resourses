import React from 'react';
import './TextBoxes.css';
import { theme } from '../Theme';

const lightModeColor = theme("light")
const darkModeColor = theme("dark")

export function TextBox1(props) {
    const {theme, width} = props;

    if (theme === "light")
        return (
            <input type="text" style={{background: lightModeColor, width: width}} className="textbox1-light"></input>
        );
    else
        return (
            <input type="text" style={{background: darkModeColor, width: width}} className="textbox1-dark"></input>
        );
} 