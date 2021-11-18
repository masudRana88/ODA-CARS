import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    let { user, isLoding } = useAuth();
    if (isLoding) {
        return (
            <div className="h-100vh">
                <div className="w-100 text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>     
                </div>   
            </div>
        )
    }
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        </div>
    );
};

export default PrivateRouter;