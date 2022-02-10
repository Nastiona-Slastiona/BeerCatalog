using Newtonsoft.Json;


public class FavoriteBeersDTO
{
    [JsonProperty("email")]
    public string Email { get; set; }

    [JsonProperty("favoriteBeers")]
    public string FavoriteBeers { get; set; } = "";
}