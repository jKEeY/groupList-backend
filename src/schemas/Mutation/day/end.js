import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import daySchema from '../../../db/models/day'

export default {
  type: new GraphQLObjectType({
    name: 'end',
    fields: {
      success: { type: GraphQLBoolean }
    }
  }),
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(root, params) {
    const result = await daySchema.findOneAndUpdate({ _id: params.id }, { state: 1 })
      .then(data => {
        if (data) return true
        else return false
      })
    return typeof result === 'undefined' ? false : result;
  }
}
