import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Components
import MainNavigation from './shared/components/navigation/MainNavigation';

// Pages
import UserScreen from './user/pages/UserScreen';
import NewPlaceScreen from './places/pages/NewPlaceScreen';
import UserPlacesScreen from './places/pages/UserPlacesScreen';
import UpdatePlaceScreen from './places/pages/UpdatePlaceScreen';
import AuthScreen from './user/pages/AuthScreen';

// Context
import { AuthContext } from './context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" component={UserScreen} exact />
            <Route path="/place/new" component={NewPlaceScreen} exact />
            <Route path="/places/:pid" component={UpdatePlaceScreen} />
            <Route path="/:userId/places" component={UserPlacesScreen} exact />
            <Route path="/auth" component={AuthScreen} exact />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
