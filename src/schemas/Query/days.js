import {
  GraphQLList
} from 'graphql';
import DayType from '../types/day';
import DaySchema from '../../db/models/day'

export default {
  type: new GraphQLList(DayType),
  async resolve() {
    return await DaySchema.find({ state: 1 })
  }
}
