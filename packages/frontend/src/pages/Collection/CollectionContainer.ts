import { withICollection } from '../../generated-types'
import Collection, { CollectionProps } from './Collection'

export default withICollection<CollectionProps>({
  options: props => ({
    variables: {
      collectionId: props.match.params.collectionId,
    },
  }),
})(Collection)
