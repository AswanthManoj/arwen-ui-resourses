import React from 'react';
import { Card1, Card2, Card3 } from './Cards';


export function Cards(props) {
    const { theme } = props;

    if (theme === "light")
        return (
            <div> 
                <Card1 label="This is a light card1" width="220px" height="300px" theme="light"/>
                <br></br>
                <Card2 label="This is a light card2" width="220px" height="300px" theme="light"/>
                <br></br>
                <Card3 title="Card3" content="This is a light card3" width="250px" theme="light"/>
            </div>
        );
    else
        return (
            <div>          
                <Card1 label="This is a dark card1" width="220px" height="300px" theme="dark"/>
                <br></br>
                <Card2 label="This is a dark card2" width="220px" height="300px" theme="dark"/>
                <br></br>
                <Card3 title="Card3" content="This is a dark card3" width="250px" theme="dark"/>
            </div>
        );
} 