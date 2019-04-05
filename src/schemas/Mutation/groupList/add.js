import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import GroupListSchema from '../../../db/models/groupList';

export default {
  type: new GraphQLObjectType({
    name: 'add',
    fields: {
      success: { type: new GraphQLNonNull(GraphQLBoolean), resolve(t){ return t }}
    }
  }),
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(root, params) {
    const user = new GroupListSchema({
      name: params.name
    })
    user.save()

    return true
  }
}