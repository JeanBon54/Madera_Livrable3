using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Madera.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private UserManager<CustomerController> _userManager;
        private SignInManager<CustomerController> _signInManager;

     
        [HttpGet]
        [Authorize]
        public IEnumerable<string> Get()
            => new string[] { "Giroud", "Maxime" };

       /* [HttpPost]
        [Route("Login")]
        //POST : /api/Customers/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {

                }
            }
            else
                return BadRequest(new { message = "Username or password is incorrect"})
        }*/

    }
}
