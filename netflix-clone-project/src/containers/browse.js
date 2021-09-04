import React, { useState, useContext } from 'react';
import { Header } from '../components';
import * as Routes from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer() {
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const { firebase } = useContext(FirebaseContext);

    const user = {
        displayName: "nirmala",
        photoURL: "1"
    };

    return profile.displayName ? (  
        <>
            <Header src= "joker1">
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={Routes.home} src="/src/images/misc/logo.png" alt="Netflix logo"/>
                        <Header.Link 
                            active={category === 'series' ? true : false }
                            onClick={() => setCategory('series')}>
                        </Header.Link>
                        <Header.Link
                            active={category === 'films' ? true : false }
                            onClick={() => setCategory('films')}>      
                        </Header.Link> 
                    </Header.Group>
                </Header.Frame>
            </Header>
            <p>Browse container</p>
                <FooterContainer />
            </>)
            : (<SelectProfileContainer user={user} setProfile={setProfile} />);
    }
