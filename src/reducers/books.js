const INITIAL_STATE = {
  totalBooks: 0,
  items: []
};

export default function books(state = INITIAL_STATE, action) {
  let { type, payload } = action;

  switch (type) {
    case 'GET_BOOKS':
      return {
        ...state,
        totalItems: payload.totalItems,
        items: payload.items
      };

    default:
      return state;
  }
}
