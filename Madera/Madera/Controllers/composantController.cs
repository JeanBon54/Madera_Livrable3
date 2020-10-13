using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;

namespace Madera.Controllers
{
    public class composantController : Controller
    {
        private readonly DefaultContext _context = null;

        public composantController(DefaultContext context)
        {
            this._context = context;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult All()
        {
            this.ViewBag.Titre = "Liste des utilisateus";
            List<Composant> composantListe = new List<Composant>();

            var query = from COMPOSANT in _context.Composant
                        select COMPOSANT;
            return View(query.ToList());

        }
    }
}
