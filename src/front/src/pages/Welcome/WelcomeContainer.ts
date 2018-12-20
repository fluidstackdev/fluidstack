import { graphql, compose } from 'react-apollo'
import { CollectionsHOC } from '../../generated-models'
import Welcome from './Welcome'

export default CollectionsHOC({})(Welcome)
