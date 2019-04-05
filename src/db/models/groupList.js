import mongoose from 'mongoose';

const GroupListSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
})

export default mongoose.model('GroupList', GroupListSchema);