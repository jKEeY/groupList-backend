import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';
import stateVisitedEnum from './stateVisitedEnum'

export default new GraphQLObjectType({
  name: 'VisitType',
  fields: {
    date_id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    number_vapor: { type: new GraphQLNonNull(GraphQLInt) },
    state: { type: new GraphQLNonNull(stateVisitedEnum)}
  }
})