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

    public User GetByEmail(User user) => _context.Users.FirstOrDefault(u => u.Email == user.Email);
}