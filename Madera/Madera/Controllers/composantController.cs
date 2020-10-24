using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
using System.Collections;
using Microsoft.Extensions.Logging;

namespace Madera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class composantController : ControllerBase
    {

        readonly DefaultContext compoDetails;
        public composantController(DefaultContext composantContext)
        {
            compoDetails = composantContext;
        }

        [HttpGet]
        public IEnumerable<Composant> Get()
        {
            var data = compoDetails.Composant.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Composant obj)
        {
            var data = compoDetails.Composant.Add(obj);
            compoDetails.SaveChanges();
            return Ok();
        }

    }
}