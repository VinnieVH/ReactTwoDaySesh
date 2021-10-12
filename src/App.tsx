import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DetailView from './views/detail/Detail';
import MainView from './views/main/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainView}/>
        <Route path='/detail' component={DetailView}/>
        <Redirect path='*' to={'/'}/>
      </Switch>
    </Router>
  );
};

export default App;
