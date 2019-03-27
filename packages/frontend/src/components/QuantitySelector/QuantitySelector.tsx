import React, { useState } from 'react'
import styled from 'styled-components'
import * as Fa from 'styled-icons/fa-solid'

interface Props {
  title: string
  onQuantityChange: (quantity: number) => void
}

function tryParseInt(str: string, defaultValue: number) {
  if (/^\d+$/g.test(str) === true) return parseInt(str)

  return defaultValue
}

export const QuantitySelector: React.SFC<Props> = props => {
  const [quantity, setQuantity] = useState(1)

  const setQuantityValue = (quantity: number) => {
    const newQuantity = Math.max(1, quantity)
    setQuantity(newQuantity)
    props.onQuantityChange(newQuantity)
  }

  return (
    <Container>
      <Title>{props.title}</Title>
      <QuantityContainer>
        <ValueSelector onClick={() => setQuantityValue(quantity - 1)}>
          <Fa.AngleLeft width={15} height={15} />
        </ValueSelector>
        <NumericInput
          type="text"
          name="quantity"
          value={quantity}
          onChange={event =>
            setQuantityValue(
              tryParseInt(event.target.value.replace(/\D/, ''), 1),
            )
          }
        />
        <ValueSelector onClick={() => setQuantityValue(quantity + 1)}>
          <Fa.AngleRight width={15} height={15} />
        </ValueSelector>
      </QuantityContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 8px;
`

const ValueSelector = styled.button`
  background: #fff !important;
  border: 1px solid #ced4da;
  padding-left: 12px;
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  outline: 0;
`

const NumericInput = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  text-align: center;
  width: 80px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  z-index: 2;
  border-right: none;
  border-left: none;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`
