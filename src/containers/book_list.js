import React, { Component } from 'react';
import { connect } from 'react-redux'; // glue between redux and react
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}

          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
   return (
     <ul className="list-group col-sm-4">
       {this.renderList()}
     </ul>
   )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props
// on the BookList container.
function mapDispatchToProps(dispatch) {
  // whenever we select a book, the result should be passed to all
  // reducers.
  // this event flows through dispatch.
  // like an RX stream.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connects the redux reducer to props.
// expects a function and reducer.
// promote - BookList from a component to a container
// it needs to know about this new dispatch method selectBook
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

