using beer_catalog.backend.Helpers;
using System.IdentityModel.Tokens.Jwt;

namespace beer_catalog.backend.BusinessLogic
{
    public class AuthRelatedService
    {
        private readonly JwtService jwtService;

        public AuthRelatedService(JwtService Service)
        {
            jwtService = Service;
        }

        public string SetJwt(User user, User userData)
        {
            if (BCrypt.Net.BCrypt.Verify(userData.Password, user.Password))
            {
                string jwt = jwtService.Generate(user.Id);

                return jwt;
            }

            return "";
        }

        public int GetUserId(string jwt)
        {
            JwtSecurityToken token = jwtService.Verify(jwt);

            return int.Parse(token.Issuer);
        }
    }
}
