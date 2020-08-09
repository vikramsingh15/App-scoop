import React from 'react';
import { Link } from 'react-router-dom';

export default function BookItem({ book, index }) {
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td>
        <Link to={`/book/${book.id}`}>
          {book && book.volumeInfo ? book.volumeInfo.title : ''}
        </Link>
      </td>
      <td>
        <img
          src={
            book && book.volumeInfo
              ? book.volumeInfo.imageLinks.smallThumbnail
              : ''
          }
          alt='book'
          width={100}
          height={150}
        />
      </td>
      <td>{book && book.volumeInfo ? book.volumeInfo.authors[0] : ''}</td>
    </tr>
  );
}
