
using Madera.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]LoginModel model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }




            return new OkObjectResult("Compte créer");
        }
    }
}
