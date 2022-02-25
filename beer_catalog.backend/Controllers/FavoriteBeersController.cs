using beer_catalog.backend.BusinessLogic;
using Microsoft.AspNetCore.Mvc;

namespace beer_catalog.backend.Controllers
{   [Route("api/favoriteBeers")]
    public class FavoriteBeersController : ControllerBase
    {
        private readonly UserRelatedService userRelatedService;

        public FavoriteBeersController(UserRelatedService userService)
        {
            userRelatedService = userService;
        }

        [HttpPost("setFavoriteBeers")]
        public IActionResult SetFavoriteBeer([FromBody] FavoriteBeerDTO favoriteBeers)
        {
            try
            {
                userRelatedService.SetFavoriteBeers(favoriteBeers);

                return Ok();
            }
            catch
            {
                return BadRequest();
            }

        }
    }
}
