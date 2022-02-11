function favoriteBeersSet(state, action) {
    return {
        ...state,
        favoritesBeersIds: action.payload
    };
}

export default favoriteBeersSet;
