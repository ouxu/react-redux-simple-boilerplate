import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import AppComponent from './components/app'

const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      {/*<IndexRoute component={}/>*/}
    </Route>

  </Router>
)

export default RouterApp