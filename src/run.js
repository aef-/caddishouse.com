import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Exhibits from './exhibits';
import Cataract from './exhibits/cataract';
import MovementInSquares from './exhibits/movement-in-squares';
import Introduction from './exhibits/introduction';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Exhibits}>
      <IndexRoute component={Introduction}/>
      <Route path="cataract" component={Cataract}/>
      <Route path="movement-in-squares" component={MovementInSquares}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

console.info( "Starting MeAtBeNdEr" );
