import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import groupListType from './groupList';
import StateEnum from './stateEnum';

import GroupListSchema from '../../db/models/groupList';

export default new GraphQLObjectType({
  name: 'DayType',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLString), resolve(day) { return day._id.toString() }},

    date: {type: new GraphQLNonNull(GraphQLString), resolve(day) {
      const date = day.date;
      const current_day = date.getDay() >= 10 ? date.getDay() : '0' + date.getDay();
      const month = date.getMonth() >= 10 ? date.getMonth() : '0' +  date.getMonth();
      const year = date.getFullYear()

      return `${current_day}.${month}.${year}`
    }},

    count_vapor: { type: new GraphQLNonNull(GraphQLInt)},
    
    state: { type: new GraphQLNonNull(StateEnum)},

    groupList: {type: new GraphQLNonNull(new GraphQLList(groupListType)), async resolve(day) { 
      const names = await GroupListSchema.find({});
      names.forEach((i) => {
        console.log(day._id)
        i['date_id'] = day._id.toString();
      })
      return names;
    }}

  }
});