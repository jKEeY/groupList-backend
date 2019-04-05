import mongoose from 'mongoose';
import visitSchema from './visite';

const daySchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  state: {
    type: Number,
    required: true,
    default: 0
  },
  count_vapor: {
    type: Number,
    required: true,
  },
})

daySchema.pre('remove', function(next) {
  visitSchema.remove({
    date_id: this._id
  })
  next()
})

export default mongoose.model('Days', daySchema);