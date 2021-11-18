import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './useAuth';

const AdminRoute = ({ children, ...rest }) => {
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
            {
                !isLoding && <Route
            {...rest}
            render={({ location }) =>
                user.email && user.role === "admin" ? (
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
            }
        </div>
    );
};

export default AdminRoute;