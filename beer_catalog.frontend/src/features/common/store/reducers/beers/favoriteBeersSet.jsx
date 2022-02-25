function favoriteBeersSet(state, action) {
    return {
        ...state,
        favoritesBeersIds: action.payload === '' ? [] : action.payload
    };
}

export default favoriteBeersSet;
