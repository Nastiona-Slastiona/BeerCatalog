using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using beer_catalog.backend.Models;
using beer_catalog.backend.BusinessLogic;

namespace beer_catalog.backend;

[Route("api/login")]
public class LoginController : ControllerBase
{
    private readonly UserRelatedService userRelatedService;
    private readonly AuthRelatedService authRelatedService;

    public LoginController(
        UserRelatedService userService,
        AuthRelatedService authService)
    {
        userRelatedService = userService;
        authRelatedService = authService;
    }

    [HttpPost("signin")]
    public IActionResult Signin([FromBody] User userData)
    {
        User user = userRelatedService.GettingUser(userData.Email);
        if (user != null)
        {
            string jwt = authRelatedService.SetJwt(user, userData);

            if (jwt != "")
            {
                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true
                });

                return Ok(userRelatedService.CreateUserDtoFromUser(user));
            }
        }

        return BadRequest(new { message = "Invalid credentials" });
    }

    [HttpPost("register")]
    public IActionResult Register([FromForm] UserDto userData)
    {
        try
        {
            User user = userRelatedService.CreateUserFromDto(userData);

            return Created("success", userRelatedService.Create(user));
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
            int userId = authRelatedService.GetUserId(Request.Cookies["jwt"]);

            return Ok(userRelatedService.GetUserById(userId));
        }
        catch
        {
            return Unauthorized();
        }

    }

    [HttpGet("getUserImage")]
    public IActionResult GetUserImage()
    {
        try
        {
            int userId = authRelatedService.GetUserId(Request.Cookies["jwt"]);

            return Ok(userRelatedService.GetImage(userId));
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
