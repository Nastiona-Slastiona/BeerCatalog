function favoriteBeerSetted(state, action) {
    return {
        ...state,
        beers: state.beersList.map(beer => {
            if (beer.id !== action.payload.id) {
                return beer;
            }

            return {
                ...beer,
                isFavorite: !beer.isFavorite
            };
        })
    };
}

export default favoriteBeerSetted;
