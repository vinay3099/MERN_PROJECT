import React,{useState,useCallback} from 'react';
import{BrowserRouter as Router,Route,Redirect,Switch}from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlaces from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth'

import MainNavigation from './shared/components/Navigation/MainNavigation';
import {AuthContext} from './shared/context/auth-context'

const App =() => {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[]);

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  let routes;
  if(isLoggedIn){
    routes =(
      <React.Fragment>
        <Route path="/" exact>
        <Users/>
        </Route>
        <Route path="/:userId/places" exact>
         <UserPlaces/>
        </Route>
        <Route path="/newplaces" exact>
        <NewPlaces/>
        </Route>
        <Route path="/places/:placeId">
        <UpdatePlaces/>
        </Route>
        
        <Redirect to="/"/>
      </React.Fragment>
    );
  }
  else{
    
    routes =(
      <React.Fragment>
        <Route path="/" exact>
        <Users/>
        </Route>
        <Route path="/:userId/places" exact>
         <UserPlaces/>
        </Route>
        <Route path="/auth">
        <Auth/>
        </Route>
        <Redirect to="/auth"/>
  

      </React.Fragment>
    );
  }
  return (
   
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn,login:login,logout: logout}}>
       <Router>
      <MainNavigation/>
      <main>
      <Switch>
        {routes}
      </Switch>
      
      </main>
     
    </Router>

    </AuthContext.Provider>
    
  );

}

export default App;
