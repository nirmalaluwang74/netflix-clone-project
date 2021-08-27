import React from 'react';
import { jumboData } from '../fixtures/jumbo.js';
import { Jumbotron } from '../components';


export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>

                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                        
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt}/>
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
            <Jumbotron.Title>Hello</Jumbotron.Title>
            <Jumbotron.SubTitle>Hello</Jumbotron.SubTitle>
        </Jumbotron.Container>
    )
};

 