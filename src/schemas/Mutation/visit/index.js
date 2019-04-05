import {
  GraphQLObjectType
} from 'graphql'
import visited from './visited'

export default {
  type: new GraphQLObjectType({
    name: 'VisitMutation',
    fields: () => ({
      visited
    })
  }),
  resolve: () => ({})
}