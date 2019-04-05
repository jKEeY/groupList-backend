import DayType from '../types/day';
import DaySchema from '../../db/models/day'

export default {
  type: DayType,
  async resolve() {
    return await DaySchema.findOne({ state: 0 })
  }
}
