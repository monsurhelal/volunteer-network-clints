import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateROUte = ({ children, ...rest }) => {

    const [logedInUser,setlogedInUser] = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logedInUser.email ? (
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
    );
};

export default PrivateROUte;