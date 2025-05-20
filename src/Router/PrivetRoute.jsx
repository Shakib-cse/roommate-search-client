import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading/>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivetRoute;