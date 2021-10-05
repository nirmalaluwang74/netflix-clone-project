import React from 'react';
import { Container, Input, Button, Text, Break } from '../opt-form/styles/opt-form';


export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({...restProps}) {
    return <Input {...restProps} />;
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src= {require('/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/icons/arrow-next.png').default} alt= "Try now"/>
        </Button>
    )
}

OptForm.Break = function OptFormBreak({ children, ...restProps}) {
    return <Break {...restProps} />;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
