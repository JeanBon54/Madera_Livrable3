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
        private readonly ILogger<commercialController> _logger;

        public commercialController(ILogger<commercialController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from Commercial in db.Set<Commercial>()
                            select new
                            {
                                CommercialId = Commercial.ID_COMMERCIAL,
                                CommercialNom = Commercial.NOM_COMMERCIAL,
                                CommercialPrenom = Commercial.PRENOM_COMMERCIAL,
                                CommercialEmail = Commercial.EMAIL_COMMERCIAL,
                                CommercialMDP = Commercial.MDP_COMMERCIAL
                            };


                return query.ToList();
            }
        }
    }
}
