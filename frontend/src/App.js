import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Components
import MainNavigation from './shared/components/navigation/MainNavigation';

// Pages
import UserScreen from './user/pages/UserScreen';
import NewPlaceScreen from './places/pages/NewPlaceScreen';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" component={UserScreen} exact />
          <Route path="/place/new" component={NewPlaceScreen} exact />
          {/* <Redirect to="/" /> */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
