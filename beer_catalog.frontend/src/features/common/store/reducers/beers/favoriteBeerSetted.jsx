function favoriteBeerSetted(state, action) {
    const beers = state.beersList.map(beer => {
        if (beer.id !== action.payload.id) {
            return beer;
        }

        return {
            ...beer,
            isFavorite: !beer.isFavorite
        };
    });
    const favorites = beers.filter(beer => beer.isFavorite).map(beer => beer.id);

    return {
        ...state,
        beersList: beers,
        favoritesBeersIds: favorites
    };
}

export default favoriteBeerSetted;
