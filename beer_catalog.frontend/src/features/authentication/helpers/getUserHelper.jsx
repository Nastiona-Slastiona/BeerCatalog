export default function getUserHelper(user) {
    const favoriteBeers = user.favoriteBeers.split(' ');
    for (let index = 0; index < favoriteBeers.length; index++) {
        favoriteBeers[index] = +favoriteBeers[index];
    }

    return favoriteBeers;
}
