import React from 'react';
import { Chart2 } from './Charts';

export function Charts(props) {
    const { theme } = props;

    if (theme === "light")
        return (
            <div> 
                <Chart2 height="300px" percent="35" theme="light"/>
            </div>
        );
    else
        return (
            <div>          
                <Chart2 height="300px" percent="70" theme="dark"/>
            </div>
        );
} 