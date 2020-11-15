//using AutoMapper;
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
       // private readonly AppDbContext _appDbContext;
      //  private readonly IMapper _mapper;
        
    //     [HttpPost]
    //public async Task<IActionResult> Post([FromBody]LoginModel model)
      //  {
         //   if(!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
       //     }

        //    var userIdentity = _mapper.Map<Commercial>(model);
       //     await _appDbContext.Commercials.AddAsync(new Commercial { ID = userIdentity.ID, EmailCommercial = userIdentity.EmailCommercial });
       //     await _appDbContext.SaveChangesAsync();

          // return new OkObjectResult("Compte créer");
       // }
    }
}
