import mappingHelper, { getDegrees, isObject } from 'features/singleBeer/helpers/mappingHelper';


export default function beerMapper(beer) {
    beer.ingredients.water = beer.boil_volume;
    delete beer.boil_volume;
    delete beer.volume;
    for (const key in beer) {
        if (isObject(beer[key])) {
            beer[key] = mappingHelper.propertyExtraction(beer[key]);
        }

        if (key === 'ingredients') {
            beer[key] = mappingHelper.propertyChanging(
                beer[key],
                mappingHelper.ingredientsMapping,
                [['value', 'unit'], 'value unit']
            );
        }

        if (key === 'method') {
            beer[key] = mappingHelper.propertyChanging(
                beer[key],
                mappingHelper.mashMapping,
                [['temp'], 'Perform temp'],
                getDegrees
            );
        }
    }

    return beer;
}
