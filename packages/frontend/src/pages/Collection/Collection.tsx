import React, { Component } from 'react'
import { DataProps } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { FilterSelect } from '../../components/Select/Select'
import {
  ICollectionQuery,
  ICollectionQueryVariables,
} from '../../generated-types'

interface RouterProps {
  collectionId: string
}

export type CollectionProps = DataProps<
  ICollectionQuery,
  ICollectionQueryVariables
> &
  RouteComponentProps<RouterProps>

interface CollectionState {
  filters: Record<string, { label: string; value: any }[]>
  visible: boolean
}

const idFromValue = (o: { label: string; value: any }) => o.value

class Collection extends Component<CollectionProps, CollectionState> {
  constructor(props: Readonly<CollectionProps>) {
    super(props)

    this.state = {
      filters: {
        brands: [],
        attributes: [],
      },
      visible: false,
    }

    this.setFilter = this.setFilter.bind(this)
  }

  async setFilter(name: string, values: any) {
    const newFilters = { ...this.state.filters, [name]: values }

    this.setState({ filters: newFilters })

    const optionsValuesIds = this.props.data
      .collection!.options.flatMap(o => newFilters[o.name] || [])
      .map(idFromValue)
    const attributesIds = this.props.data
      .collection!.attributes.flatMap(a => newFilters[a.name] || [])
      .map(idFromValue)

    await this.props.data.refetch({
      collectionId: this.props.match.params.collectionId,
      brandsIds: newFilters['brands'].map(idFromValue),
      optionsValuesIds: optionsValuesIds,
      attributesIds,
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    if (!this.props.data.collection) {
      return <div>Collection not found</div>
    }

    const brands = this.props.data.collection!.brands.map(b => ({
      label: b.name,
      value: b.id,
    }))

    return (
      <CollectionContainer>
        <CollectionTitle>{this.props.data.collection.name}</CollectionTitle>
        <CollectionFilterContainer>
          <FilterSelect
            title="Brands"
            name="brands"
            options={brands}
            setFilter={this.setFilter}
            state={this.state}
          />
          {this.props.data.collection!.options.map(o => {
            const options = o.values!.map(v => ({
              label: v.name,
              value: v.id,
            }))

            return (
              <FilterSelect
                key={o.id}
                name={o.name}
                title={o.name}
                options={options}
                setFilter={this.setFilter}
                state={this.state}
              />
            )
          })}
          {this.props.data.collection.attributes.map(a => {
            const values = a.values.map(v => ({ label: v.value, value: v.id }))
            return (
              <FilterSelect
                key={a.name}
                title={a.name}
                name={a.name}
                options={values}
                setFilter={this.setFilter}
                state={this.state}
              />
            )
          })}
        </CollectionFilterContainer>
        <ProductsContainer>
          {this.props.data.collection!.products.map(product => (
            <CardProduct product={product} />
          ))}
        </ProductsContainer>
      </CollectionContainer>
    )
  }
}

export default Collection

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const CollectionTitle = styled.h1`
  font-size: 30px;
`

const CollectionFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: space-between;

  /* boring properties */
  list-style: none;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
`

const ProductContainer = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: black;
`
