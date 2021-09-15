import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as Routes from '../constants/routes';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

 function Signin() {
    const history = useHistory();
    // const { firebase } = useContext(FirebaseContext)
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isInvalid = password === '' | email === '';

    const handleSignin = (event) => {
        event.preventDefault();
        
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {  
                setError('');
                history.push(Routes.browse);
                })
            .catch((error) => { 
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    }
          
    
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    {/* {error && <Form.Error>{error}</Form.Error>} */}

                    <Form.Base onSubmit={handleSignin} method = "POST">

                        <Form.Input
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />

                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign in
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now. </Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA
                        </Form.TextSmall>

                    </Form.Base>     
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}

export default Signin