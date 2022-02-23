using beer_catalog.backend.Models;

namespace beer_catalog.backend.Data;

public interface IUserRepository
{
    User Create(User user);
    User GetByEmail(string email);

    User GetById(int id);
}