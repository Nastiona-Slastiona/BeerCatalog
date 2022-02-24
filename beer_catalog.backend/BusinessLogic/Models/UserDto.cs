namespace beer_catalog.backend;

public class UserDto
{
    public string Name { get; set; }
    public string Email { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public IFormFile Image { get; set; }
    public string Password { get; set; } = null!;

    public string FavoriteBeers { get; set; } = "";
}