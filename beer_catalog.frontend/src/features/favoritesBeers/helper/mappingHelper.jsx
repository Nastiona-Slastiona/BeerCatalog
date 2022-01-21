export function getDegrees(temperature) {
    const degrees = temperature.unit === 'celsius' ? '°C' : '';

    return `at ${temperature.value} ${degrees}`;
}

export function isObject(obj) {
    return typeof obj === 'object' && !(obj instanceof Array);
}

const replacement = (defaultProp, prop, action = undefined) => {
    defaultProp[0].forEach(value => {
        if (action) {
            prop[value] = action(prop[value]);
        }
        defaultProp[1] = defaultProp[1].replace(value, prop[value]);
    });

    return defaultProp[1];
};

const mappingHelper = {
    propertyExtraction: property => {
        property = Object.entries(property);

        return property;
    },
    ingredientsMapping: ingr => {
        const add = ingr.add ? `add when ${ingr.add}` : '';

        return `"${ingr.name}" - ${ingr.amount.value} ${ingr.amount.unit} ${add}`;
    },
    mashMapping: mash => {
        return `${mash.duration} minutes ${getDegrees(mash.temp)} `;
    },
    propertyChanging: (property, mapping, defaultProp, action) => {
        return property.map(prop => {
            prop[0] = prop[0][0].toUpperCase() + prop[0].slice(1).split('_')[0];
            prop[1] = typeof prop[1] === 'string' || prop[1] === null
                ? [prop[1]]
                : !isObject(prop[1])
                    ? prop[1].map(mapping)
                    : [replacement(defaultProp, prop[1], action)];

            return prop;
        });
    }
};

export default mappingHelper;
