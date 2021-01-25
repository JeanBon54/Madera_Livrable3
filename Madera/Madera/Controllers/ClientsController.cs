using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Madera.Models;
using Madera.Models.Search;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Clients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RechercheClient>>> GetClients()
        {
            return await _context.Clients.Select(p => new RechercheClient()
            {
                ID = p.ID,
                NomClient = p.NomClient,
                PrenomClient = p.PrenomClient,
                DateNaissanceClient = p.DateNaissanceClient,
                AdresseClient = p.AdresseClient,
                VilleClient = p.VilleClient,
                CpClient = p.CpClient,
                Telephone = p.Telephone,
                EmailClient = p.EmailClient,
                IdUtilisateurCreation = p.IdUtilisateurCreation
            }).ToListAsync();
        }

        //// GET: api/Clients/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Client>> GetClient(int id)
        //{
        //    var client = await _context.Clients.FindAsync(id);

        //    if (client == null)
        //    {
        //        return NotFound();
        //    }

        //    return client;
        //}

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RechercheClient>> GetClient(int id)
        {
            var clients = _context.Clients.Select(p => new RechercheClient()
            {
                ID = p.ID,
                NomClient = p.NomClient,
                PrenomClient = p.PrenomClient,
                DateNaissanceClient = p.DateNaissanceClient,
                AdresseClient = p.AdresseClient,
                VilleClient = p.VilleClient,
                CpClient = p.CpClient,
                Telephone = p.Telephone,
                EmailClient = p.EmailClient,
                IdUtilisateurCreation = p.IdUtilisateurCreation,
                DateCreation = p.DateCreation
            }).Where(p => p.ID == id);

            if (clients == null)
            {
                return NotFound();
            }

            RechercheClient rechercheClients = await clients.FirstOrDefaultAsync();
            return rechercheClients;
        }


        // GET: api/Projets/5
        [HttpPost("search")]
        public async Task<List<SearchingClient>> GetListeClient([FromBody] SearchClient search)
        {
            var listeClient = _context.Clients.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.NomClient))
                listeClient = listeClient.Where(p => p.NomClient.ToLower().Contains(search.NomClient.ToLower()));

            return await listeClient.Select(p => new SearchingClient(p)).ToListAsync();
        }

        // GET: api/Projets/5
        [HttpPost("autocomplete")]
        public async Task<List<AutoCompleteClient>> GetClient([FromBody] AutoCompleteClient search)
        {
            var listeClient = _context.Clients.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.labelAttribute))
                listeClient = listeClient.Where(p => p.NomClient.ToLower().Contains(search.labelAttribute.ToLower()));

            return await listeClient.Select(p => new AutoCompleteClient() { ID = p.ID, labelAttribute = p.PrenomClient + ' ' + p.NomClient}).ToListAsync();
        }

        // GET: api/Clients
        [HttpGet("autocomplete")]
        public async Task<ActionResult<IEnumerable<AutoCompleteClient>>> GetAutoCompleteClients()
        {
            return await _context.Clients.Select(p => new AutoCompleteClient()
            {
                ID = p.ID,
                labelAttribute = p.NomClient
            }).ToListAsync();
        }


        // PUT: api/Clients/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("edit")]
        public async Task<IActionResult> EditClient(Client client)
        {
            _context.Entry(client).State = EntityState.Modified;

            try
            {   
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(client.ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clients
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.ID }, client);
        }






        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Client>> DeleteClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return client;
        }

        private bool ClientExists(int id)
        {
            return _context.Clients.Any(e => e.ID == id);
        }
    }
}
