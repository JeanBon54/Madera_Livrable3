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
        private readonly ILogger<composantController> _logger;

        public composantController(ILogger<composantController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from Composant in db.Set<Composant>()
                            select new
                            {
                                ComposantId = Composant.ID_COMPOSANT,
                                ComposantLibelle = Composant.LIBELLE_COMPOSANT,
                                ComposantNature = Composant.NATURE_COMPOSANT,
                                ComposantCaract = Composant.CARACT_COMPOSANT,
                                ComposantUnite = Composant.UNITE_USAGE_COMPOSANT
                            };


                return query.ToList();
            }
        }
    }
}