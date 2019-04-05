import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql';
import visitType from './visit';
import VisitSchema from '../../db/models/visite';

export default new GraphQLObjectType({
  name: 'GroupListType',
  fields: {
    name: {type: new GraphQLNonNull(GraphQLString), resolve(names) { return names.name }},
    visited: {type: new GraphQLNonNull(new GraphQLList(visitType)), async resolve(names) {
      const result = await VisitSchema.find({ date_id: names.date_id, name: names.name })
      console.log(result)
      return await VisitSchema.find({ date_id: names.date_id, name: names.name })
    }}
  },
})