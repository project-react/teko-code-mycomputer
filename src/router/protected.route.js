import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../services/auth"
import Home from "components/Page/Home/Home"

export const ProtectedRoute = ({
  path: path, 
  ...rest
}) => {
  if(auth.isAuthenticated()) {
    return(
      <Route path = { path } render = { props => <Home {...props} />} />
    ); 
  }
  return (
    <Route
      {...rest}
      render={props => {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location	
                }
              }}
            />
          );
        }
      }
    />
  );
};