const serviceUrls = {
    getSingleBeer: 'https://api.punkapi.com/v2/beers/:id',
    getLimittedBeers: 'https://api.punkapi.com/v2/beers?page=:currPage&per_page=:page',
    setFavoriteBeers: 'https://beer-catalog-app.azurewebsites.net/api/favoriteBeers/setFavoriteBeers',
    getUserImage: 'https://beer-catalog-app.azurewebsites.net/api/login/getUserImage',
    registration: 'https://beer-catalog-app.azurewebsites.net/api/login/register',
    signIn: 'https://beer-catalog-app.azurewebsites.net/api/login/signin',
    getUser: 'https://beer-catalog-app.azurewebsites.net/api/login/getUser',
    signOut: 'https://beer-catalog-app.azurewebsites.net/api/login/signout'
};

export default serviceUrls;
