import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt
} from 'graphql';
import stateVisitedEnum from './stateVisitedEnum';

export default new GraphQLInputObjectType({
  name: 'VisitInput',
  fields: {
    date_id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    number_vapor: { type: new GraphQLNonNull(GraphQLInt) },
    state: { type: new GraphQLNonNull(stateVisitedEnum)}
  }
})