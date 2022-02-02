using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using beer_catalog.backend.Models;
using beer_catalog.backend.Helpers;

namespace beer_catalog.backend.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IUserRepository _repository;
    private readonly JwtService _jwtService;

    public HomeController(
        ILogger<HomeController> logger,
        IUserRepository repository,
        JwtService jwtService)
    {
        _logger = logger;
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
    public IActionResult Register([FromBody] User userData)
    {
        var user = new User
        {
            Password = BCrypt.Net.BCrypt.HashPassword(userData.Password),
            Name = userData.Name,
            BirthDate = userData.BirthDate,
            Email = userData.Email,
            Image = userData.Image
        };

        return Created("success", _repository.Create(user));
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
        catch (Exception e)
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
