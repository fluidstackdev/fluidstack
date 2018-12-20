import React, { Component } from 'react'
import { DataProps } from 'react-apollo'
import { CollectionsQuery, CollectionsVariables } from '../../generated-models'
import { node } from 'prop-types'
import { NavItem, NavBar } from '../../components/NavBar/NavBar'

interface Props extends DataProps<CollectionsQuery, CollectionsVariables> {}

class Welcome extends Component<Props> {
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
