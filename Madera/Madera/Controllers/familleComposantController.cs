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
        private readonly ILogger<familleComposantController> _logger;

        public familleComposantController(ILogger<familleComposantController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from familleCompo in db.Set<familleComposant>()
                            select new
                            {
                                familleComposantId = familleCompo.ID_FAMILLE_COMPOSANT,
                                familleComposantLibelle = familleCompo.LIBELLE_FAMILLE_COMPOSANT,
                                familleComposantIdCompo = familleCompo.ID_COMPOSANT
                                

                            };

                return query.ToList();
            }
        }
    }
}
