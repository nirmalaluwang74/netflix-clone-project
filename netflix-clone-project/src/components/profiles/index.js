import React from 'react';
import { Container, Title, List, Item, Picture, Name } from '../profiles/styles/profiles';

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? require(`/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/users/${src}.png`).default : '/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/misc/loading.gif'} />;
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

