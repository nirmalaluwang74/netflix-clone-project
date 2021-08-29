import React from 'react';
import { Header } from '../components';
import * as Routes from '../constants/routes';

const logo = require('/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/misc/logo.png')

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo
                    to={Routes.home}
                    src={logo}
                    alt='Netflix'/> 
            </Header.Frame>
            {children}
        </Header>
    )
}