public interface IUserRepository
{
    User Create(User user);
    User GetByEmail(User user);
}