import React from 'react';
import './Buttons.css';
import { theme } from '../Theme';

const lightModeColor = theme("light")
const darkModeColor = theme("dark")

export function Button1(props) {
    const { label, theme, onClick } = props;

    if (theme === "light")
        return (
            <button style={{background: lightModeColor}} className="button1-light" onClick={onClick}>
            {label}
            </button>
        );
    else
        return (
            <button style={{background: darkModeColor}} className="button1-dark" onClick={onClick}>
            {label}
            </button>
        );
}   


export function Button2(props) {
    const { label, theme, onClick } = props;

    if (theme === "light")
        return (
            <button style={{background: lightModeColor}} className="button2-light" onClick={onClick}>
            {label}
            </button>
        );
    else
        return (
            <button style={{background: darkModeColor}} className="button2-dark" onClick={onClick}>
            {label}
            </button>
        );
} 


export function Button3(props) {
    const { label, theme, onClick } = props;

    if (theme === "light")
        return (
            <button style={{background: lightModeColor}} className="button3-light" onClick={onClick}>
            {label}
            </button>
        );
    else
        return (
            <button style={{background: darkModeColor}} className="button3-dark" onClick={onClick}>
            {label}
            </button>
        );
}


export function Button4(props) {
    const { label, theme, onClick } = props;

    if (theme === "light")
        return (
            <button style={{background: lightModeColor}} className="button4-light" onClick={onClick}>
            {label}
            </button>
        );
    else
        return (
            <button style={{background: darkModeColor}} className="button4-dark" onClick={onClick}>
            {label}
            </button>
        );
}


export function Button5(props) {
    const { label, theme, onClick } = props;

    if (theme === "light")
        return (
            <button style={{background: lightModeColor}} className="button5-light" onClick={onClick}>
            {label}
            </button>
        );
    else
        return (
            <button style={{background: darkModeColor}} className="button5-dark" onClick={onClick}>
            {label}
            </button>
        );
}
