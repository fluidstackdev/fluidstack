import React from 'react'
import styled from 'styled-components'

export const BuyButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  letter-spacing: 0.05em;
  border: 2px solid #ff4c3b;
  background-image: linear-gradient(30deg, #ff4c3b 50%, transparent 0);
  background-size: 540px;
  background-repeat: no-repeat;
  background-position: 0;
  transition: background 0.3s ease-in-out;
  line-height: 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 7px 25px;
  margin-right: 8px;

  &:hover {
    background-position: 100%;
    color: #000;
    background-color: #fff;
  }
`
