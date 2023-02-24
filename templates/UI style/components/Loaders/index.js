import React from 'react';
import { Loader1 } from './Loaders';

export function Loaders(props) {
    const { theme } = props;

    if (theme === "light")
        return (
            <div> 
                <Loader1 theme="light" diameter="150px"/>
            </div>
        );
    else
        return (
            <div>          
                <Loader1 theme="dark" diameter="150px"/>
            </div>
        );
}