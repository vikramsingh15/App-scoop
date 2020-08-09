import axios from 'axios';

//Get Books
export const getBooks = () => async dispatch => {
  try {
    const response = await axios.get(
      '/books/v1/volumes?filter=free-ebooks&q=a'
    );
    dispatch({ type: 'GET_BOOKS', payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
