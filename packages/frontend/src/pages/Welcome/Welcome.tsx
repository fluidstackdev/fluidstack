import React, { Component } from 'react'
import { DataProps } from 'react-apollo'
import {
  ICollectionsQuery,
  ICollectionsQueryVariables,
} from '../../generated-types'
import { NavItem, NavBar } from '../../components/NavBar/NavBar'

export interface WelcomeProps
  extends DataProps<ICollectionsQuery, ICollectionsQueryVariables> {}

class Welcome extends Component<WelcomeProps> {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    if (!this.props.data.collections) {
      return <div>No collections found</div>
    }

    const items: NavItem[] = this.props.data.collections.map(
      collection =>
        ({
          label: collection.name,
          link: `/collection/${collection.id}`,
        }),
    )

    return <NavBar items={items} />
  }
}

export default Welcome
