import * as _ from 'lodash'
import React, { useState } from 'react'
import {
  IVariant,
  IProductDetailFragment,
  IOption,
  IOptionValue,
} from '../../generated-types'
import styled from 'styled-components'
import {
  getIterableVariants,
  getAvailableOptionValues,
  sameOptionValue,
  isOptionValueAvailable,
  OptionValueWithColor,
} from '../../helpers/variants'

function variantsFromOptionValue(
  optionValue: IOptionValue,
  variants: IVariant[],
) {
  return variants.filter(variant => {
    return variant.optionValues!.some(oValue => oValue.id === optionValue.id)
  })
}

/**
 * Display all options of the product, and return a variant when one is selected
 */
export const VariantSelector: React.SFC<{
  product: IProductDetailFragment
  onVariantChange?: (variant?: IVariant) => void
  onOptionValueEnter?: (variants: IVariant[]) => void
  onOptionValueLeave?: () => void
}> = props => {
  const [
    hoveredOptionValue,
    setHoveredOptionValue,
  ] = useState<IOptionValue | null>(null)
  const [selectedOptionValues, setSelectedOptionValues] = useState<
    IOptionValue[]
  >([])
  const iterableVariants = getIterableVariants(props.product.variants!)
  const optionValues =
    selectedOptionValues.length > 0
      ? selectedOptionValues
      : hoveredOptionValue !== null
      ? [hoveredOptionValue]
      : []
  const availableOptionValues = getAvailableOptionValues(
    optionValues,
    props.product.variants!,
  )

  const clickOnOptionValue = (optionValue: IOptionValue) => {
    if (selectedOptionValues.find(s => s.id === optionValue.id)) {
      setSelectedOptionValues(
        selectedOptionValues.filter(s => s.id !== optionValue.id),
      )
      if (props.onVariantChange) {
        props.onVariantChange(undefined)
      }
    } else {
      if (
        !selectedOptionValues.find(s => s.option.id === optionValue.option.id)
      ) {
        const newSelectedOptionValues = [...selectedOptionValues, optionValue]
        setSelectedOptionValues(newSelectedOptionValues)

        if (
          newSelectedOptionValues.length ===
          props.product.variants![0].optionValues!.length
        ) {
          const selectedOptionsValuesIds = newSelectedOptionValues.map(
            s => s.id,
          )
          const selectedVariant = props.product.variants!.find(v =>
            v.optionValues!.every(o => selectedOptionsValuesIds.includes(o.id)),
          )

          if (selectedVariant && props.onVariantChange) {
            props.onVariantChange(selectedVariant)
          }
        }
      }
    }
  }

  const onOptionValueEntered = (optionValue: OptionValueWithColor) => {
    setHoveredOptionValue(optionValue)
    const variants = variantsFromOptionValue(
      optionValue,
      props.product.variants!,
    )

    if (props.onOptionValueEnter) {
      props.onOptionValueEnter(variants)
    }
  }

  const onOptionValueLeave = () => {
    setHoveredOptionValue(null)

    if (props.onOptionValueLeave) {
      props.onOptionValueLeave()
    }
  }

  return (
    <Container>
      <OptionValuesContainer onMouseLeave={() => onOptionValueLeave()}>
        {iterableVariants.map(([optionName, values]) => (
          <OptionValuesGroup key={`${props.product.name}-${optionName}`}>
            <OptionValuesGroupTitle>{optionName}</OptionValuesGroupTitle>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {values.map(value => {
                const isAvailable = isOptionValueAvailable(
                  value,
                  optionValues,
                  availableOptionValues,
                )
                const isSelected =
                  selectedOptionValues.find(s => s.id === value.id) !==
                  undefined
                if (value.isColor) {
                  return (
                    <ColorValue
                      key={value.id}
                      color={value.name}
                      onMouseEnter={() => onOptionValueEntered(value)}
                      available={isAvailable}
                      selected={isSelected}
                      onClick={() => isAvailable && clickOnOptionValue(value)}
                    />
                  )
                } else if (optionName === 'Size') {
                  return (
                    <SizeValue
                      key={value.id}
                      available={isAvailable}
                      selected={isSelected}
                      onMouseEnter={() => onOptionValueEntered(value)}
                      onClick={() => isAvailable && clickOnOptionValue(value)}
                    >
                      {value.name.toUpperCase()}
                    </SizeValue>
                  )
                } else {
                  return (
                    <OptionValue
                      key={value.id}
                      available={isAvailable}
                      onMouseEnter={() => onOptionValueEntered(value)}
                      onClick={() => isAvailable && clickOnOptionValue(value)}
                    >
                      {value.name}
                    </OptionValue>
                  )
                }
              })}
            </div>
          </OptionValuesGroup>
        ))}
      </OptionValuesContainer>
    </Container>
  )
}

const Container = styled.div``

const OptionValuesContainer = styled.div``

const OptionValuesGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`

const OptionValuesGroupTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 32px;
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

const ColorValue = styled.div<{
  color: string
  available: boolean
  selected: boolean
}>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 10px;
  cursor: pointer;
  ${props =>
    `background-color: ${
      props.available ? colors[props.color.toLowerCase()] : '#e0e0e0'
    }`}

  ${props => `border: 1px solid ${props.selected ? 'blue' : '#f7f7f7'};`}
`

const SizeValue = styled.div<{ available: boolean; selected: boolean }>`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;

  ${props => (props.available ? 'color: #222;' : 'color: #f7f7f7;')}
  ${props => `border: 1px solid ${props.selected ? 'blue' : '#f7f7f7'};`}
`
