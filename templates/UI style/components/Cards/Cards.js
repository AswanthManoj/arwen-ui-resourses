import React from 'react';
import './Cards.css';
import { theme } from '../Theme';

const lightModeColor = theme("light")
const darkModeColor = theme("dark")


export function Card1(props) {
    const { label, theme, width, height } = props;

    if (theme === "light")
        return (
            <div style={{background: lightModeColor, width: width, height: height}} className="card1-light">{label}</div>
        );
    else
        return (
            <div style={{background: darkModeColor, width: width, height: height}} className="card1-dark">{label}</div>
        );
}   


export function Card2(props) {
    const { label, theme, width, height } = props;

    if (theme === "light")
        return (
            <div style={{background: lightModeColor, width: width, height: height}} className="card2-light">{label}</div>
        );
    else
        return (
            <div style={{background: darkModeColor, width: width, height: height}} className="card2-dark">{label}</div>
        );
} 


export function Card3(props) {
    const { content, title, theme, width } = props;

    if (theme === "light")
        return (
            <div style={{background: lightModeColor, width: width}} className="card3-light">
                <div className="icon-light"></div>
                <div className="content-light">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        );
    else
        return (
            <div style={{background: darkModeColor, width: width}} className="card3-dark">
                <div className="icon-dark"></div>
                <div className="content-dark">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        );
}