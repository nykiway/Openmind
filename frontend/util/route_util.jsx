import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={ props =>
        (!loggedIn ? <Component {...props} /> : <Redirect to="/home" />)
    }/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={ props =>
        (loggedIn ? <Component {...props} /> : <Redirect to="/discover" />)
    }/>
);

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUserId)
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));