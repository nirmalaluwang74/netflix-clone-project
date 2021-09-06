import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as Routes from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

 function Signup() {
    const history = useHistory();
    // const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || email === '';

    const handleSignup = (event) => {
        event.preventDefault();

    //     firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(emailAddress, password)
    //     .then((result) =>
    //         result.user
    //         .updateProfile({
    //             displayName: firstName,
    //             photoURL: Math.floor(Math.random() * 5 ) + 1,
    //         })
    //         .then(() => {
    //             setEmailAddress('');
    //             setPassword('');
    //             setError('');
    //             history.push(Routes.browse);
    //         })
    //     ).catch((error) => setError(error.message));
    // }

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign up</Form.Title>
                    {/* {error && <Form.Error>{error}</Form.Error>} */}

                    <Form.Base onSubmit={handleSignup} method = "POST">

                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />

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
                            Sign up
                        </Form.Submit>  

                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign up now. </Form.Link>
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

export default Signup