using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
using System.Collections;

namespace Madera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class composantController : ControllerBase
    {

        private readonly DefaultContext _context = null;

        public composantController(DefaultContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable GetList()
        {
            //this.ViewBag.Titre = "Liste des utilisateus";
            List<Composant> composantListe = new List<Composant>();

            var query = from COMPOSANT in _context.Composant
                        select COMPOSANT;
            //return View(query.ToList());

            return query.ToList();
        }
    }
}
