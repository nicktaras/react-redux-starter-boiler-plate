export function selectBook(book){

  console.log('reducer was called', book);

  // selectBook is an action creator, it needs to return an action.
  // an object with a type property.
  return {
    type: 'SELECTED_BOOK',
    payLoad: book
  }

}