import {
  GraphQLEnumType
} from 'graphql'

export default new GraphQLEnumType({
  name: 'StateVisitedType',
  values: {
    VISITED: {
      value: 0
    },
    SICK: {
      value: 1
    },
    PASS: {
      value: 2
    }
  }
});