using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera.Models;
using System.Collections;
using Microsoft.Extensions.Logging;

namespace Madera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController:ControllerBase
    {
        readonly DefaultContext cliDetails;
        public ClientController(DefaultContext cliContext)
        {
            cliDetails = cliContext;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Client obj)
        {
            cliDetails.Client.Add(obj);
            cliDetails.SaveChanges();
            int? id = obj.ID_CLIENT; // Yes it's here
            return Ok();
        }

    }
}
