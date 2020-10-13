using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;

namespace Madera.Controllers
{
    public class ClientController:Controller
    {
         private readonly DefaultContext _context = null;

        public ClientController(DefaultContext context)
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
            List<Client> clientListe = new List<Client>();

            var query = from CLIENT in _context.Client
                        select CLIENT;
            return View(query.ToList());

        }
    }
}
