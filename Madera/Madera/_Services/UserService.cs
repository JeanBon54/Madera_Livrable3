using Madera._Helpers;
using Madera.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Madera.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace Madera._Services
{
    public interface IUserService
    {
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
        IEnumerable<Commercial> GetAll();
        Task<Commercial> GetByIdAsync(int id);
    }


    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        private readonly AppSettings _appSettings;
        private List<Commercial> _commercials;

        public UserService(AppDbContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest model)
        {
            List<Commercial> commercials = await _context.Commercials.ToListAsync();
            _commercials = commercials;
            var commercial = _commercials.SingleOrDefault(x => x.EmailCommercial == model.Username && x.MdpCommercial == model.Password);

            // return null if user not found
            if (commercial == null) return null;

            // authentication successful so generate jwt token
            var token = generateJwtToken(commercial);

            return new AuthenticateResponse(commercial, token);
        }

        public IEnumerable<Commercial> GetAll()
        {

            return _commercials;
        }

        public async Task<Commercial> GetByIdAsync(int id)
        {
            List<Commercial> commercials = await _context.Commercials.ToListAsync();
            _commercials = commercials;
            var commercial = _commercials.SingleOrDefault(x => x.ID == id);

            return commercial;
        }

        // helper methods

        private string generateJwtToken(Commercial commercial)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", commercial.ID.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}

