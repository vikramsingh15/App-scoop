import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../actions/books';

export default function ShowBook({ match }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Books = useSelector(state => state.books);
  const [book, setBook] = useState();

  //get books
  useEffect(() => {
    dispatch(getBooks());
    setLoading(false);
  }, [getBooks]);

  //find book by id
  useEffect(() => {
    if (Books && Books.items && Books.items.length) {
      setBook(Books.items.find(book => book.id == match.params.id));
    }
  }, [Books, setBook]);

  if (!book || loading) {
    return <div>Loading</div>;
  }

  return (
    <div className='container mt-5'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              className='card-img'
              alt='book'
              style={{ maxHeight: '500px' }}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h3 className='card-title font-primary'>
                {book.volumeInfo.title}
              </h3>
              <p className='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                ipsam amet porro distinctio ratione ut dolorem commodi
                repellendus fuga quidem praesentium eius inventore, ex impedit
                illo omnis molestias at quasi?
              </p>
              <p className='card-text'>
                <small className='text-muted'>
                  Page Count : {book.volumeInfo.pageCount || 'not vailable'}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
