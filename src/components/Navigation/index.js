import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Sessions'

const Navigation = () => (
    <div>
    <AuthUserContext.Consumer>
    {   authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
    </div>
    )

const NavigationAuth = () => (
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
            <SignOutButton />
            </li>
        </ul>
)

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>LANDING</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
        </li>
    </ul>
)

export default Navigation;