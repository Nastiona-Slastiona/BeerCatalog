const requestHelper = {
    get: async url => {
        const options = {
            method: 'GET'
        };

        const data = await getRequest(
            url,
            options
        );

        return data.json();
    }
};

function errorHandler(response, methodName) {
    if (!response.ok) {
        throw new Error(`ServerError on ${methodName}`);
    }
}

async function getRequest(
    url,
    options
) {
    const response = await fetch(url, options);

    errorHandler(response, options.method);

    return response;
}

export default requestHelper;
