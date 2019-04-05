import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import daySchema from '../../../db/models/day'
import QueryType from '../../Query';

export default {
  type: new GraphQLObjectType({
    name: 'start',
    fields: {
      success: { type: new GraphQLNonNull(GraphQLBoolean), resolve(t) { return t.success } },
      query: { type: new GraphQLNonNull(QueryType), resolve(t) { return t.query } }
    }
  }),
  args: {
    count_vapor: { type: new GraphQLNonNull(GraphQLInt) }
  },
  async resolve(root, params) {
    const day = new daySchema({
      count_vapor: params.count_vapor
    })
    const result = await day.save().then(data => {
      if (data) return true
      else false
    })
    return {
      success: typeof result === 'undefined' ? false : result,
      query: {}
    }
  }
}