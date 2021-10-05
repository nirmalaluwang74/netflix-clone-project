

import React from 'react';
import { Header, Profiles } from '../components';
import * as Routes from '../constants/routes';

export function SelectProfileContainer({user, setProfile}) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo
                        to={Routes.home}
                        src={require('/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/misc/joker 1.jpg').default}
                        alt="Netflix"
                    />
                    <p>Profile container</p>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}
                    >      
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}