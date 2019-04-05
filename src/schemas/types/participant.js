import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ParticantPayload',
  fields: {
    name: new GraphQLNonNull(GraphQLString)
  }
})