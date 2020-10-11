using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Madera.Controllers
{
    public class commercialController : Controller
    {

        private readonly DefaultContext _context = null;

        public commercialController (DefaultContext context)
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
            List<Commercial> commerciauxListe = new List<Commercial>();

            var query = from COMMERCIAL in _context.Commercial
                        select COMMERCIAL;
            return View(query.ToList());

        }
    }
}
