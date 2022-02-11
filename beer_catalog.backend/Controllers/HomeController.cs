using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using beer_catalog.backend.Models;
using beer_catalog.backend.Helpers;

namespace beer_catalog.backend.Controllers;


[Route("api")]
public class HomeController : Controller
{
    private readonly IUserRepository _repository;
    private readonly JwtService _jwtService;

    public HomeController(
        IUserRepository repository,
        JwtService jwtService)
    {
        _repository = repository;
        _jwtService = jwtService;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("signin")]
    public IActionResult Signin([FromBody] User userData)
    {
        var user = _repository.GetByEmail(userData.Email);
        if (user != null)
        {
            if (BCrypt.Net.BCrypt.Verify(userData.Password, user.Password))
            {
                var jwt = _jwtService.Generate(user.Id);

                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true
                });

                return Ok(user);
            }
        }

        return BadRequest(new { message = "Invalid credentials" });
    }

    [HttpPost("register")]
    public IActionResult Register([FromForm] UserDTO userData)
    {
        try
        {
            var user = new User
            {
                Password = BCrypt.Net.BCrypt.HashPassword(userData.Password),
                Name = userData.Name,
                BirthDate = userData.BirthDate,
                Email = userData.Email
            };

            if (userData.Image != null)
            {
                byte[]? imageData = null;

                using (var binaryReader = new BinaryReader(userData.Image.OpenReadStream()))
                {
                    imageData = binaryReader.ReadBytes((int)userData.Image.Length);
                }

                user.Image = imageData;
            }


            return Created("success", _repository.Create(user));
        }
        catch (Exception e)
        {
            return BadRequest(new
            {
                message = e.Message
            });
        }
    }

    [HttpGet("user")]
    public IActionResult User()
    {
        try
        {
            var jwt = Request.Cookies["jwt"];

            var token = _jwtService.Verify(jwt);

            int userId = int.Parse(token.Issuer);

            var user = _repository.GetById(userId);

            return Ok(user);
        }
        catch
        {
            return Unauthorized();
        }
    }

    [HttpPost("signout")]
    public IActionResult Signout()
    {
        Response.Cookies.Delete("jwt");

        return Ok(new
        {
            message = "success"
        });
    }

    [HttpPost("setFavoriteBeers")]
    public IActionResult SetFavoriteBeer([FromBody] FavoriteBeerDTO favoriteBeers)
    {
        try
        {
            _repository.ChangeFavoriteBeers(favoriteBeers);

            return Ok();
        }
        catch
        {
            return BadRequest();
        }

    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
