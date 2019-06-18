import { withCollection } from '../../generated-types'
import Collection, { CollectionProps } from './Collection'

export default withCollection<CollectionProps>({
  options: props => ({
    variables: {
      collectionId: props.match.params.collectionId,
    },
  }),
})(Collection)
