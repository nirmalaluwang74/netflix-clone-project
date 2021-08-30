import React from 'react';
import { Header } from '../components';
// import * as Routes from '../constants/routes';

const logo = require('/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/misc/logo.png')
const backgroundImage = require('/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/misc/bg-movies.jpg')

export function HeaderContainer() {
    return (
        <Header src={backgroundImage}>
            <Header.Frame>
                <Header.Logo src={logo} alt='Netflix'/>
                <Header.ButtonLink > Sign In </Header.ButtonLink>
            </Header.Frame>
        </Header>
    )
}