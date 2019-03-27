import styled from 'styled-components'

export const AttributesTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  text-align: left;

  tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
`

export const AttributeName = styled.th`
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  letter-spacing: 0.8px;
`

export const AttributeValue = styled.td`
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  letter-spacing: 0.8px;
`
