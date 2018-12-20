import { graphql, compose } from 'react-apollo'
import { CollectionHOC } from '../../generated-models'
import Collection, { CollectionProps } from './Collection'

export default CollectionHOC<CollectionProps>({
  options: props => ({
    variables: {
      collectionId: props.match.params.collectionId,
    },
  }),
})(Collection)
