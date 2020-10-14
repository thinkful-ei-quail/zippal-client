import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default function PrivateRoute({ component, ...props}){
  const Component = component
  return (
    <Route
    {...props}
    render = {componentProps => (
      <UserContext.Consumer>
        {UserContext =>
          !!UserContext.user.id
          ? <Component { ...componentProps} />
          : (
            <Redirect
              to={{
                pathname:UserContext.user.idle ? '/login' : '/register',
                state: {from: componentProps.location},
              }}
            />
          )
        }
      </UserContext.Consumer>
    )}
  />
  )
}