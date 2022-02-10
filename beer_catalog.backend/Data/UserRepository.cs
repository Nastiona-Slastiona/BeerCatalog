public class UserRepository : IUserRepository
{
    private readonly UserContext _context;

    public UserRepository(UserContext context)
    {
        _context = context;
    }

    public User Create(User user)
    {
        _context.Users.Add(user);
        user.Id = _context.SaveChanges();

        return user;
    }

    public User GetByEmail(string email) => _context.Users.FirstOrDefault(user => user.Email == email);

    public User GetById(int id) => _context.Users.FirstOrDefault(u => u.Id == id);

    public void ChangeFavoriteBeers(FavoriteBeersDTO favoriteBeers)
    {
        User user = this.GetByEmail(favoriteBeers.Email);

        if (user != null)
        {
            user.FavoriteBeers = favoriteBeers.FavoriteBeers;
        }

        _context.SaveChanges();
    }
}