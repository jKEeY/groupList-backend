import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';
import VistSchema from '../../../db/models/visite';
import VistInput from '../../types/visitInput';

export default {
  type: new GraphQLObjectType({
    name: 'visited',
    fields: {
      success: { type: new GraphQLNonNull(GraphQLBoolean), resolve(t){ return t }}
    }
  }),
  args: {
    input: { type: new GraphQLNonNull(VistInput) }
  },
  resolve(root, { input }) {
    const visit = new VistSchema(input)
    visit.save()

    return true
  }
}