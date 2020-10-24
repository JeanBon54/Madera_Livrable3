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
    public class familleComposantController
    {
        readonly DefaultContext familleCompoDetails;
        public familleComposantController(DefaultContext familleCompoContext)
        {
            familleCompoDetails = familleCompoContext;
        }

        [HttpGet]
        public IEnumerable<familleComposant> Get()
        {
            var data = familleCompoDetails.famille_Composant.ToList();
            return data;
        }
    }
}
