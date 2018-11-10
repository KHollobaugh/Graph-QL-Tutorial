import React, { Component } from 'react';
import { graphql } from 'react-apollo'; 
import {getBooksQuery} from '../queries/Queries';
import BookDetails from './BookDetails';


class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks() {
        const data = this.props.data;
        if(data.loading){
            return(<div>Loading Books...</div>)
        } else {
            return data.books.map(book => {
                return(
                    <li key={book.id} onClick={(event) => { this.setState({ selected: book.id })}}
                    className="side-panel-list">
                    {book.name}
                    </li>
                )
            })
        }
    }

  render() {
        return (
      <div id="book-list">
      <ul>
         {this.displayBooks()}
      </ul>
      <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
