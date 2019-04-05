import {
  GraphQLObjectType
} from 'graphql';
import DaysQuery from './days'
import ProcessDay from './processDay';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    days: DaysQuery,
    processDay: ProcessDay
  })
})