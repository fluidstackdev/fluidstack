import _ from 'lodash'
import React, { useState } from 'react'
import { DataProps } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import {
  AttributeName,
  AttributesTable,
  AttributeValue,
} from '../../components/AttributesTable/AttributesTable'
import { BuyButton } from '../../components/BuyButton/BuyButton'
import { QuantitySelector } from '../../components/QuantitySelector/QuantitySelector'
import { VariantSelector } from '../../components/VariantSelector/VariantSelector'
import {
  IProductQuery,
  IProductQueryVariables,
  IVariant,
} from '../../generated-types'

interface RouterProps {
  slug: string
}

export type ProductProps = DataProps<IProductQuery, IProductQueryVariables> &
  RouteComponentProps<RouterProps>

export const Product: React.SFC<ProductProps> = props => {
  if (props.data.loading) {
    return <div>Loading...</div>
  }

  if (!props.data.product) {
    return <div>Product not found</div>
  }

  const [selectedVariant, setSelectedVariant] = useState<IVariant>(
    props.data.product.variants![0]
  )
  const [locked, setLocked] = useState(false)
  const [bigThumbnail, setBigThumbnail] = useState(selectedVariant.images![0])

  return (
    <Container>
      <TopContainer>
        <ImageContainer>
          <ThumbnailListContainer>
            {selectedVariant.images!.map(image => (
              <ThumbnailContainer
                key={image.id}
                onMouseEnter={() => {
                  setBigThumbnail(image)
                }}
              >
                <Thumbnail src={image.url} width={44} />
              </ThumbnailContainer>
            ))}
          </ThumbnailListContainer>
          <div>
            <BigThumnail src={bigThumbnail.url} />
          </div>
        </ImageContainer>
        <DetailsContainer>
          <h2 style={{ fontSize: 16, margin: 0 }}>
            {props.data.product.brand.name}
          </h2>
          <h1
            style={{
              fontSize: 32,
              margin: 0,
              marginBottom: 16,
              textTransform: 'uppercase',
            }}
          >
            {props.data.product.name}
          </h1>
          <span style={{ fontSize: 28, marginBottom: 16 }}>
            {selectedVariant.price / 100} €{' '}
          </span>
          <VariantSelector
            product={props.data.product}
            onOptionValueEnter={variants => {
              const hasOnlyOneColorVariant =
                _(variants!)
                  .flatMap(v => v.optionValues!)
                  .uniqBy(v => v.id)
                  .filter(v => !!v.option.isColor)
                  .value().length === 1

              if (hasOnlyOneColorVariant && !locked) {
                setSelectedVariant(variants[0])
                setBigThumbnail(variants[0].images![0])
              }
            }}
            onVariantChange={variant => {
              if (variant) {
                setSelectedVariant(variant)
                setLocked(true)
              } else {
                setLocked(false)
              }
            }}
          />
          <QuantityContainer>
            <QuantitySelector
              title="Quantity"
              onQuantityChange={quantity => {}}
            />
          </QuantityContainer>
          <div style={{ display: 'flex', marginBottom: 20 }}>
            <BuyButton>Add to cart</BuyButton>
            <BuyButton>Buy now</BuyButton>
          </div>
          <DescriptionContainer>
            <DescriptionTitle>Product description</DescriptionTitle>
            <DescriptionContent>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem,
            </DescriptionContent>
          </DescriptionContainer>
        </DetailsContainer>
      </TopContainer>
      <BottomContainer>
        <AttributesTableContainer>
          <AttributesTitle>Attributes</AttributesTitle>
          <AttributesTable>
            <tbody>
              {props.data.product.attributes!.map(a => (
                <tr key={a.id}>
                  <AttributeName>{a.key}</AttributeName>
                  <AttributeValue>{a.value}</AttributeValue>
                </tr>
              ))}
            </tbody>
          </AttributesTable>
        </AttributesTableContainer>
      </BottomContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 32px;
`

const TopContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 40px;
`

const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 50vh;
  margin-right: 32px;
`

const ThumbnailListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`

const ThumbnailContainer = styled.div`
  width: 44px;
  margin-bottom: 8px;
  cursor: pointer;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`

const BigThumnail = styled.img`
  width: 100%;
  min-width: 320px;
  object-fit: contain;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const QuantityContainer = styled.div`
  margin-bottom: 32px;
`

const DescriptionContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  border-top: 1px dashed #ddd;
`

const DescriptionTitle = styled.h6`
  color: #222;
  font-weight: 700;
  margin: 0;
`

const DescriptionContent = styled.p`
  color: #777;
`

const AttributesTableContainer = styled.div`
  width: 50%;
`

const AttributesTitle = styled.h6`
  text-transform: uppercase;
  border: 0;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 16px;
`
