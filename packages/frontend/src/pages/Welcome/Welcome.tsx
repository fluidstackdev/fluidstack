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
      return null
    }

    const items: NavItem[] = this.props.data.collections!.edges.map(
      ({ node: collection }) =>
        ({
          label: collection.name,
          link: `/collection/${collection.id}`,
        } as NavItem),
    )

    return <NavBar items={items} />
  }
}

export default Welcome
