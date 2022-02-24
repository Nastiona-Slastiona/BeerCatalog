using Newtonsoft.Json;


public class FavoriteBeerDTO
{
    [JsonProperty("email")]
    public string Email { get; set; }

    [JsonProperty("favoriteBeers")]
    public string FavoriteBeers { get; set; } = "";
}