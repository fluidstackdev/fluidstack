import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Router from './Router'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    )
  }
}

export default App
