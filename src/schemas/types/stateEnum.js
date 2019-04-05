import {
  GraphQLEnumType
} from 'graphql'

export default new GraphQLEnumType({
  name: 'StateType',
  values: {
    IN_PROCESS: {
      value: 0
    },
    COMPLETED: {
      value: 1
    },    
  }
});