import React from 'react';
import { TextBox1 } from './TextBoxes';

export function TextBoxes(props) {
    const { theme } = props;

    if (theme === "light")
        return (
            <div> 
                <TextBox1 theme="light" width="400px"/>
            </div>
        );
    else
        return (
            <div>          
                <TextBox1 theme="dark" width="400px"/>
            </div>
        );
}