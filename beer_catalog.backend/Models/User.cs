using Newtonsoft.Json;

namespace beer_catalog.backend;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public byte[]? Image { get; set; }
    public string Password { get; set; } = null!;
}