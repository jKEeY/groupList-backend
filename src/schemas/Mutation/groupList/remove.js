import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import GroupListSchema from '../../../db/models/groupList';

export default {
  type: new GraphQLObjectType({
    name: 'remove',
    fields: {
      success: { type: new GraphQLNonNull(GraphQLBoolean), resolve(t){ return t }}
    }
  }),
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(root, params) {
    const result = await GroupListSchema.findOneAndDelete({ _id: params.id }).then((data) => {
      if (data) return true
      else false
    })
    return typeof result !== 'undefined' ? true : false
  }
}