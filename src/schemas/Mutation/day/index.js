import {
  GraphQLObjectType
} from 'graphql'
import start from './start';
import end from './end';

export default {
  type: new GraphQLObjectType({
    name: 'DayMutation',
    fields: () => ({
      start,
      end
    })
  }),
  resolve: () => ({})
}