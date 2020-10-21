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
    public class devisController : ControllerBase
    {
        private readonly ILogger<devisController> _logger;

        public devisController(ILogger<devisController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from Devis in db.Set<Devis>()
                            select new
                            {
                                devisId = Devis.ID_DEVIS,
                                devisLibelle = Devis.LIBELLE_DEVIS,
                                devisEtat = Devis.ETAT_DEVIS,
                                devisDateDeb = Devis.DATE_DEBUT_DEVIS,
                                devisPrixTTC = Devis.PRIX_TOTAL_TTC_DEVIS,
                                //devisDateCrea = Devis.DATE_CREATION_CLIENT,
                                //devisDateModif = Client.DATE_MODIFICATION_CLIENT,
                            };



                return query.ToList();
            }
        }


    }
}
