import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import UserScreen from './user/pages/UserScreen';
import NewPlaceScreen from './places/pages/NewPlaceScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={UserScreen} exact />
        <Route path="/place/new" component={NewPlaceScreen} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
