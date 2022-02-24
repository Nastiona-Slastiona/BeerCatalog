using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using beer_catalog.backend.Models;
using beer_catalog.backend.Helpers;
using beer_catalog.backend.DTOs;
using System.IdentityModel.Tokens.Jwt;

namespace beer_catalog.backend;


[Route("api/login")]
public class LoginController : ControllerBase
{
    private readonly IUserRepository _repository;
    private readonly JwtService _jwtService;

    public LoginController(
        IUserRepository repository,
        JwtService jwtService)
    {
        _repository = repository;
        _jwtService = jwtService;
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

    [HttpGet("getUser")]
    public IActionResult GetUser()
    {
        try
        {
            string? jwt = Request.Cookies["jwt"];

            JwtSecurityToken token = _jwtService.Verify(jwt);

            int userId = int.Parse(token.Issuer);

            User user = _repository.GetById(userId);

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

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return BadRequest(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
