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
    public class moduleController : ControllerBase
    {
        private readonly ILogger<moduleController> _logger;

        public moduleController(ILogger<moduleController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from Module in db.Set<Module>()
                            select new
                            {
                                ModuleId = Module.ID_MODULE,
                                ModuleLibelle = Module.LIBELLE_MODULE,
                                ModulePrixHT = Module.PRIX_HT_MODULE,
                                ModuleDebutPointX = Module.DEBUT_POINT_X,
                                ModuleFinPointX = Module.FIN_POINT_X,
                                ModuleDebutPointY = Module.DEBUT_POINT_Y,
                                ModuleFinPointY = Module.FIN_POINT_Y,
                            };

                return query.ToList();
            }
        }


    }
}
