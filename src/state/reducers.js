import { ADD_NAME } from './actions';
const initialState = {
  names: [
    'Apple',
    'Banana',
    'Cookie',
    'Dannon Yogurt',
    'Enchilada'
  ]
};

function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_NAME:
      return {...state, names: state.names.concat([action.payload])}
    default:
      return state;
  }
}

export default reducer;

