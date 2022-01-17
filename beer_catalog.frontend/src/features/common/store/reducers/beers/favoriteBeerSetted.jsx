function favoriteBeerSetted(state, action) {
    return {
        ...state,
        beersList: state.beersList.map(beer => {
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
