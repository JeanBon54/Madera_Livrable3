using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
namespace Madera.Controllers
{
    public class projetController :Controller
    {
        private readonly DefaultContext _context = null;

        public projetController(DefaultContext context)
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
            List<Projet> projetListe = new List<Projet>();

            var query = from PROJET in _context.Projet
                        select PROJET;
            return View(query.ToList());

        }

    }
}
