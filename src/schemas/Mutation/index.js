import {
  GraphQLObjectType
} from 'graphql';
import days from './day'
import groupLists from './groupList'
import visit from './visit'

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'This mutations schemas',
  fields: () => ({
    days,
    groupLists,
    visit
  })
})