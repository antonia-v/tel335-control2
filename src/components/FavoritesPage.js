import React from 'react'
import Facts from './Facts'
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  add: (obj) => dispatch({ type: "ADD", payload: obj }),
  remove: (obj) => dispatch({ type: "REMOVE", payload: obj }),
});

const FavoritesPage = (props) => {
  const { favorites } = props;

  return (
    <div className="mx-5">
      <h1 className='my-5'>Favorites</h1>
      <div className='my-5'>
        {favorites.length > 0 ? (
          <Facts facts={favorites} />
        ) : (
          <p>No favorite facts.</p>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage)