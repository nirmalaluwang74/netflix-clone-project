import React from 'react';
import { Header } from '../components';
import * as Routes from '../constants/routes';


export function HeaderContainer({children}) {
    return (
        <Header src={require('../images/misc/bg-movies.jpg').default}>
            <Header.Frame>
                <Header.Logo to={Routes.home} src={require('../images/misc/logo.png').default} alt='Netflix'/>
                <Header.ButtonLink to={Routes.signIn}> Sign In </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}