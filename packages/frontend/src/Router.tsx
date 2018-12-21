import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './pages/Welcome/WelcomeContainer'
import Collection from './pages/Collection/CollectionContainer'
import CollectionContainer from './pages/Collection/CollectionContainer'

const AppRouter = () => (
  <Router>
    <div>
      <h2>Collections</h2>
      <Welcome />
      <Route
        path={'/collection/:collectionId'}
        component={CollectionContainer}
      />
    </div>
  </Router>
)

export default AppRouter
