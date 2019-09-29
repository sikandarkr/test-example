import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  return (
    <Route
    exact
      {...rest}
      render={props =>
        !localStorage.getItem("Authorization") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute