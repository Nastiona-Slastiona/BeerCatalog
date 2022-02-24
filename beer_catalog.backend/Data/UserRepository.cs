using beer_catalog.backend.Models;

namespace beer_catalog.backend;

public class UserRepository
{
    private readonly UserContext userContext;

    public UserRepository(UserContext context)
    {
        userContext = context;
    }

    public User Create(User user)
    {
        userContext.Users.Add(user);
        user.Id = userContext.SaveChanges();

        return user;
    }

    public User GetByEmail(string email) => userContext.Users.FirstOrDefault(user => user.Email == email);

    public User GetById(int id) => userContext.Users.FirstOrDefault(u => u.Id == id);
}