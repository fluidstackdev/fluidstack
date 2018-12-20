import { graphql, compose } from 'react-apollo'
import { CollectionHOC } from '../../generated-models'
import Collection, { Props } from './Collection'

export default CollectionHOC<Props>({
  options: props => ({
    variables: {
      collectionId: props.match.params.collectionId,
    },
  }),
})(Collection)
