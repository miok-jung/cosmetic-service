import { Route, Switch } from 'react-router';
import About from './About';
import Home from './Home';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
