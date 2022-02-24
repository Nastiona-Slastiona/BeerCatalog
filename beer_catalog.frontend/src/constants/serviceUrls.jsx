const serviceUrls = {
    getSingleBeer: 'https://api.punkapi.com/v2/beers/:id',
    getLimittedBeers: 'https://api.punkapi.com/v2/beers?page=:currPage&per_page=:page',
    registration: 'http://localhost:8080/api/login/register',
    signIn: 'http://localhost:8080/api/login/signin',
    getUser: 'http://localhost:8080/api/login/getUser',
    signOut: 'http://localhost:8080/api/login/signout'
};

export default serviceUrls;
