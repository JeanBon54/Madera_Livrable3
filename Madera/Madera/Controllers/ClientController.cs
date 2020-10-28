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
        readonly AppDbContext cliDetails;
        public ClientController(AppDbContext cliContext)
        {
            cliDetails = cliContext;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Client client)
        {
            cliDetails.Clients.Add(client);
            cliDetails.SaveChanges();
            int? id = client.ID; // Yes it's here
            return Ok();
        }

    }
}
