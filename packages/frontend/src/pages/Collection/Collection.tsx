import React, { Component } from 'react'
import { DataProps } from 'react-apollo'
import { CollectionQuery, CollectionVariables } from '../../generated-models'
import { RouteComponentProps } from 'react-router'

interface RouterProps {
  collectionId: string
}

export type CollectionProps = DataProps<CollectionQuery, CollectionVariables> &
  RouteComponentProps<RouterProps>

class Collection extends Component<CollectionProps> {
  render() {
    if (this.props.data.loading) {
      return null
    }

    return (
      <div>
        <div>
          <h3>Brands</h3>
          <select>
            {this.props.data.collection!.brands.map(brand => (
              <option label={brand.name}>{brand.id}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Options</h3>
          {this.props.data.collection!.options.map(option => (
            <>
              <span>{option.name}</span>
              <select>
                {option.values.map(value => (
                  <option label={value.name}>{value.id}</option>
                ))}
              </select>
            </>
          ))}
        </div>
        <div>
          <h3>Attributes</h3>
          <select>
            {this.props.data.collection!.attributes.map(attr => (
              <option label={attr.value}>{attr.id}</option>
            ))}
          </select>
        </div>
        <h2>Products</h2>
        {this.props.data.collection!.products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    )
  }
}

export default Collection
