using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
using System.Collections;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Madera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class commercialController : ControllerBase
    {

        readonly DefaultContext commerDetails;
        public commercialController(DefaultContext commerContext)
        {
            commerDetails = commerContext;
        }

        [HttpGet]
        public IEnumerable<Composant> Get()
        {
            var data = commerDetails.Composant.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Composant obj)
        {
            var data = commerDetails.Composant.Add(obj);
            commerDetails.SaveChanges();
            return Ok();
        }

    }
}
