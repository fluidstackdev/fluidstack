import { Option } from '@generated/photon'

export const fragment = `fragment ProductVariant on Product {
  variants {
    optionValues {
      option { id name }
    }
  }
}`

export interface Type {
  variants: {
    optionValues: { option: Option }[]
  }[]
}
