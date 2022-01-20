const propertyExtraction = (property, object) => {
    for (const key in property) {
        object[key] = property[key];
    }

    return Object.keys(property);
};

export default function beerMapper(beer) {
    beer.ingredients.water = beer.boil_volume;
    delete beer.boil_volume;
    delete beer.volume;
    for (const key in beer) {
        if (typeof beer[key] === 'object' && !(beer[key] instanceof Array)) {
            beer[key] = propertyExtraction(beer[key], beer);
        }
    }

    return beer;
}
