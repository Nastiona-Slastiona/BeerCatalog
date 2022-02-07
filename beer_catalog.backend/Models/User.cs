using Newtonsoft.Json;

public class User
{
    public int Id { get; set; }
    [JsonProperty("Name")]
    public string Name { get; set; }
    [JsonProperty("Email")]
    public string Email { get; set; } = null!;
    [JsonProperty("BirthDate")]
    public DateTime BirthDate { get; set; }
    [JsonProperty("Image")]
    public byte[]? Image { get; set; }
    [JsonProperty("Password")]
    public string Password { get; set; } = null!;
}