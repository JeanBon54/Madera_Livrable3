using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
using System.Collections;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Madera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class commercialController : ControllerBase
    {

        private readonly DefaultContext _context = null;

        public commercialController (DefaultContext context)
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
