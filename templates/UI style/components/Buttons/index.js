import React from 'react';
import { Button1, Button2, Button3, Button4, Button5 } from './Buttons';

export function Buttons(props) {
    const { theme } = props;

    if (theme === "light")
        return (
            <div> 
                <Button1 label="Light Button 1" theme="light" onClick={() => console.log("light Button 1 clicked")} />
                <Button2 label="Light Button 2" theme="light" onClick={() => console.log("light Button 2 clicked")} />
                <Button3 label="Light Button 3" theme="light" onClick={() => console.log("light Button 3 clicked")} />
                <Button4 label="Light Button 4" theme="light" onClick={() => console.log("light Button 4 clicked")} />
                <Button5 label="Light Button 5" theme="light" onClick={() => console.log("light Button 5 clicked")} />
            </div>
        );
    else
        return (
            <div>          
                <Button1 label="Dark Button 1" theme="dark" onClick={() => console.log("dark Button 1 clicked")} />
                <Button2 label="Dark Button 2" theme="dark" onClick={() => console.log("dark Button 2 clicked")} />
                <Button3 label="Dark Button 3" theme="dark" onClick={() => console.log("dark Button 3 clicked")} />
                <Button4 label="Dark Button 4" theme="dark" onClick={() => console.log("dark Button 4 clicked")} />
                <Button5 label="Dark Button 5" theme="dark" onClick={() => console.log("dark Button 5 clicked")} />
            </div>
        );
}