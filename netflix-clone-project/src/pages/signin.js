import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';

export default function Signin() {
    const [error, setError] = useState('');

    const handleSignin = (event) => {
        event.preventDefault();
    }

    return (
    
        <HeaderContainer>
            <Form>
                <Form.Title>Sign in</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method = "POST">
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Submit disabled={false} type="submit">
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
    )
}