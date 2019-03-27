import React, { useState } from 'react'
import styled from 'styled-components'
import { ICollectionProductFragment, IOptionValue } from '../../generated-types'
import {
  getAvailableOptionValues,
  getDisplayPrice,
  getIterableVariants,
  isOptionValueAvailable,
  sameOptionValue,
} from '../../helpers/variants'
import { Link } from 'react-router-dom'

interface Props {
  product: ICollectionProductFragment
}

export const CardProduct: React.SFC<Props> = props => {
  const [optionValue, setOptionValue] = useState<IOptionValue | null>(null)
  const iterableVariants = getIterableVariants(props.product.variants!)
  const availableOptionValues = optionValue
    ? getAvailableOptionValues([optionValue], props.product.variants!)
    : null

  return (
    <Container>
      <ImageContainer to={`/product/${props.product.slug}`}>
        <Image src={props.product.thumbnail.url} />
      </ImageContainer>
      <DetailContainer>
        <TopDetailContainer to={`/product/${props.product.slug}`}>
          <LabelsContainer>
            <BrandName>{props.product.brand.name}</BrandName>
            <ProductName>{props.product.name}</ProductName>
          </LabelsContainer>
          <Price>{getDisplayPrice(props.product) / 100} €</Price>
        </TopDetailContainer>
        <OptionValuesContainer>
          {iterableVariants.map(([optionName, values]) => (
            <OptionValuesGroup key={`${props.product.name}-${optionName}`}>
              <OptionValuesGroupTitle>{optionName}</OptionValuesGroupTitle>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {values.map(v => {
                  if (v.isColor) {
                    return (
                      <ColorValue
                        key={`${optionName}-${v.id}`}
                        color={v.name}
                        onClick={() =>
                          setOptionValue(
                            sameOptionValue(v, optionValue) ? null : v,
                          )
                        }
                        available={isOptionValueAvailable(
                          v,
                          [],
                          availableOptionValues,
                        )}
                      />
                    )
                  } else {
                    return (
                      <OptionValue
                        key={`${optionName}-${v.id}`}
                        available={isOptionValueAvailable(
                          v,
                          [],
                          availableOptionValues,
                        )}
                        onClick={() =>
                          setOptionValue(
                            sameOptionValue(v, optionValue) ? null : v,
                          )
                        }
                      >
                        {v.name}
                      </OptionValue>
                    )
                  }
                })}
              </div>
            </OptionValuesGroup>
          ))}
        </OptionValuesContainer>
      </DetailContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-right: 16px;
  padding-bottom: 16px;
  flex-grow: 1;
  flex-basis: 20%;
  display: flex; /* so child elements can use flexbox stuff too! */
  flex-direction: column;

  &:hover {
  }
`

const ImageContainer = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  color: black;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  margin-bottom: 4px;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 8px 12px;
`

const TopDetailContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
`

const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const BrandName = styled.span`
  color: #1a1a1a;
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 12px;
`
const ProductName = styled.span`
  color: #1a1a1a;
  margin-bottom: 2px;
  font-size: 12px;
`

const Price = styled.span`
  color: #1a1a1a;
  margin-bottom: 2px;
  font-size: 12px;
`

const OptionValuesContainer = styled.div``

const OptionValuesGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`

const OptionValuesGroupTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
`

const OptionValue = styled.span<{ available: boolean }>`
  font-size: 12px;
  padding: 3px;
  border-radius: 2px;
  margin-right: 2px;
  min-width: 20px;
  text-align: center;

  ${props => `background-color: ${props.available ? '#0000000d' : 'white'};`}
  ${props => `color: ${props.available ? 'black' : '#00000070'};`}

  &:hover {
    cursor: pointer;
    background-color: #00000014;
  }
`

const colors: Record<string, string> = {
  red: '#ff7979',
  blue: '#686de0',
  green: '#badc58',
  violet: '#e056fd',
}

const ColorValue = styled.div<{ color: string; available: boolean }>`
  width: 15px;
  height: 15px;
  margin-right: 4px;
  ${props =>
    `background-color: ${
      props.available ? colors[props.color.toLowerCase()] : '#e0e0e0'
    }`}

  &:hover {
    cursor: pointer;
  }
`
