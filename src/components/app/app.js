import React from 'react';

import {Header} from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import {Provider} from '../swapi-context';
import SwapiService from '../../services/swapi-service';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';

const swapi = new SwapiService();

const App = () => {
  return (
    <div>
      <Provider value={swapi}>
        <Router>
          <Header />
          <RandomPlanet />
          <Route path='/' exact
            render={() => (
              <div id='cont'>
                <h1>Welcome to Star Wars</h1>
              </div>
            )} />
          <Route path='/people/:id?' render={({ match }) => {
            const selectedItemId = match.url === '/people/' ? 1 : match.params.id
            return <PeoplePage selectedItemId={selectedItemId}/>
          }}/>
          <Route path='/planet/:id?' render={({ match }) => {
            const selectedItemId = match.url === '/planet/' ? 2 : match.params.id
            return <PlanetPage selectedItemId={selectedItemId}/>
          }}/>
          <Route path='/starship/:id?' render={({ match }) => {
            const selectedItemId = match.url === '/starship/' ? 5 : match.params.id
            return <StarshipPage selectedItemId={selectedItemId}/>
          }}/>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
