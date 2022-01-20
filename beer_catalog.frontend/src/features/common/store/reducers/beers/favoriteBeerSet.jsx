function favoriteBeerSet(state, action) {
    const beers = state.beersList.map(beer => {
        if (beer.id !== action.payload.id) {
            return beer;
        }

        return {
            ...beer,
            isFavorite: !beer.isFavorite
        };
    });
    let favoritesId = [...state.favoritesBeersIds];
    let favoritesBeers = [...state.favoriteBeers];

    if (!action.payload.isFavorite) {
        favoritesId = favoritesId.filter(beerId => beerId !== action.payload.id);
        favoritesBeers = state.favoriteBeers.filter(beer => beer.id !== action.payload.id);
    } else if (!favoritesId.includes(action.payload.id)) {
        favoritesId.push(action.payload.id);
    }

    return {
        ...state,
        beersList: beers,
        favoritesBeersIds: favoritesId,
        favoriteBeers: favoritesBeers
    };
}

export default favoriteBeerSet;
