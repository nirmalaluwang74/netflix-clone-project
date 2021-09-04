import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, Link, Text, Group, ButtonLink } from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps}) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Text = function HeaderText({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;  
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}
