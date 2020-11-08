
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Madera.Models;
using Madera.Models.Search;
using System.Security.Permissions;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjetsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Projets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjetCommercial>>> GetProjets()
        {
            return await _context.Projets.Select(p => new ProjetCommercial(p)).ToListAsync();
        }

        // GET: api/Projets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjetCommercial>> GetProjet(int id)
        {
            var projet = await _context.Projets.FindAsync(id);

            if (projet == null)
            {
                return NotFound();
            }

            return new ProjetCommercial(projet);
        }

        // GET: api/Projets/5
        [HttpPost("search")]
        public async Task<List<ProjetCommercial>> GetListeProjet([FromBody] SearchProjet search)
        {
            var listeProject = _context.Projets.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.LibelleProjet))
                listeProject = listeProject.Where(p => p.LibelleProjet.ToLower().Contains(search.LibelleProjet.ToLower()));

            if (search.ClientId.GetValueOrDefault() != 0)
                listeProject = listeProject.Where(p => p.ClientID == search.ClientId.Value);

            if (search.DateCreation.HasValue)
                listeProject = listeProject.Where(p => p.DateCreation.Date == search.DateCreation.Value.Date);

            return await listeProject.Select(p => new ProjetCommercial(p)).ToListAsync();
        }

        // PUT: api/Projets/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjet(int id, Projet projet)
        {
            if (id != projet.ID)
            {
                return BadRequest();
            }

            _context.Entry(projet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjetExists(id))
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

        // POST: api/Projets
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Projet>> PostProjet(Projet projet)
        {
            _context.Projets.Add(projet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjet", new { id = projet.ID }, projet);
        }

        // DELETE: api/Projets/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Projet>> DeleteProjet(int id)
        {
            var projet = await _context.Projets.FindAsync(id);
            if (projet == null)
            {
                return NotFound();
            }

            _context.Projets.Remove(projet);
            await _context.SaveChangesAsync();

            return projet;
        }

        private bool ProjetExists(int id)
        {
            return _context.Projets.Any(e => e.ID == id);
        }
    }
}
