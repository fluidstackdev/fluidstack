import { withProduct } from '../../generated-types'
import { Product, ProductProps } from './Product'

export default withProduct<ProductProps>({
  options: props => ({
    variables: {
      slug: props.match.params.slug,
    },
  }),
})(Product)
