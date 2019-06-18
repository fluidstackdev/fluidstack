import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome/WelcomeContainer'
import CollectionContainer from './pages/Collection/CollectionContainer'
import ProductContainer from './pages/Product/ProductContainer'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route
        path={'/collection/:collectionId'}
        component={CollectionContainer}
      />
      <Route path={'/product/:slug'} component={ProductContainer} />
      <Route path={'/'} component={Welcome} />
    </Switch>
  </Router>
)

export default AppRouter
