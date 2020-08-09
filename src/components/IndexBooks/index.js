import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../actions/books';
import BookItem from './BookItem';

export default function IndexBooks() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(getBooks());
    setLoading(false);
  }, [getBooks]);

  const renderBooks = () => {
    return Books.items.map((book, index) => {
      return <BookItem book={book} index={index} key={book.id} />;
    });
  };

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div className='container'>
      <div className='mb-5'>
        <h1 style={{ textAlign: 'center' }}>My Libray</h1>
      </div>
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Book Title</th>
              <th scope='col'>Image</th>
              <th scope='col'>Author</th>
            </tr>
          </thead>
          <tbody>{Books.items.length > 0 ? renderBooks() : 'Loading..'}</tbody>
        </table>
      </div>
    </div>
  );
}
