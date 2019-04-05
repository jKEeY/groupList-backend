import {
  GraphQLObjectType
} from 'graphql'

import add from './add'
import remove from './remove'

export default {
  type: new GraphQLObjectType({
    name: 'GroupListMutation',
    fields: () => ({
      add,
      remove
    })
  }),
  resolve: () => ({})
}