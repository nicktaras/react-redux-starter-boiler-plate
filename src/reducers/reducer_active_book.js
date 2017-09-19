// state arg is not app state, just the state reducer is responsible
// for. This is only responsible for reducing the current 'active' book.
export default function(state = null, action){

  switch (action.type) {
    case 'SELECTED_BOOK':
      return action.payLoad;
  }

  return state;

}