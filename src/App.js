import { Route, Switch } from 'react-router';
import About from './About';
import Main from 'container/main';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
