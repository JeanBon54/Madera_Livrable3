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
    public class gammeController: ControllerBase
    {
        private readonly ILogger<gammeController> _logger;

        public gammeController(ILogger<gammeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from Gamme in db.Set<Gamme>()
                            select new
                            {
                                gammeId = Gamme.ID_GAMME,
                                gammeLibelle = Gamme.LIBELLE_GAMME,
                                gammeType = Gamme.TYPE_GAMME,
                                gammeQualite = Gamme.QUALITE_HUISSERIE_GAMME,
                            };

                return query.ToList();
            }
        }
    }
}
