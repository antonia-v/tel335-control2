const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE":
      return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload.id)};
    default:
      return state;
  }
};

export default favoritesReducer;
