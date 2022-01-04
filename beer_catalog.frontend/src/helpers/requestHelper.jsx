import serviceUrls from 'src/constants/serviceUrls';
import urlHelper from 'src/helpers/urlHelper';


const requestHelper = {
    get: async (url, parameters) => {
        const options = {
            method: 'GET'
        };

        const data = await getRequest(
            url,
            parameters,
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
    urlTemplate,
    parameters,
    options
) {
    const url = urlHelper.getUrlByTemplate(
        serviceUrls[urlTemplate],
        parameters
    );
    const response = await fetch(url, options);

    errorHandler(response, options.method);

    return response;
}

export default requestHelper;
