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
        private readonly DefaultContext _context = null;
        private readonly ILogger<ClientController> _logger;

        public ClientController(ILogger<ClientController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            using (DefaultContext db = new DefaultContext())
            {

                var query = from Client in db.Set<Client>()
                            select new
                            {
                                ClientId = Client.ID_CLIENT,
                                ClientNom = Client.NOM_CLIENT,
                                ClientPrenom = Client.PRENOM_CLIENT,
                                ClientAdresse = Client.ADRESSE_CLIENT,
                                ClientVille = Client.VILLE_CLIENT
                            };


                return query.ToList();
            }
        }
    }
}
