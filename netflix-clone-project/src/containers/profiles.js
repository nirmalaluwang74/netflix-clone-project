

import React from 'react';
import { Header, Profiles } from '../components';
import * as Routes from '../constants/routes';

export function SelectProfileContainer(user, setProfile) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo
                        to={Routes.home}
                        src="/src/images/misc/logo.png"
                        alt="Netflix"
                    />
                    <p>Profile container</p>
                </Header.Frame>
            </Header>
            <Profiles
                onClick={() => setProfile({
                    displayName: user.displayName,
                    photoURL: user.photoURL

                })}
            >
                <Profiles.Title>Who's watching</Profiles.Title>
                {/* <Profiles.Picture src={user.photoURL} /> */}
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles>
        </>
    )
}