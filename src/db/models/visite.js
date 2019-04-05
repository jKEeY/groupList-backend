import mongoose from 'mongoose';

const visiteSchema = mongoose.Schema({
  date_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  number_vapor: {
    type: Number,
    required: true
  },
  state: {
    type: Number,
  },
})

export default mongoose.model('Visits', visiteSchema);