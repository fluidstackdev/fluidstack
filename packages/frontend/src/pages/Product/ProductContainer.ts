import { withIProduct } from '../../generated-types'
import { Product, ProductProps } from './Product'

export default withIProduct<ProductProps>({
  options: props => ({
    variables: {
      slug: props.match.params.slug,
    },
  }),
})(Product)
