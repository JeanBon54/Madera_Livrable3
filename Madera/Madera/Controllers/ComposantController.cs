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
    public class ComposantController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ComposantController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Composant
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SearchingComposant>>> GetComposants()
        {
            return await _context.Composants.Select(p => new SearchingComposant(p)).ToListAsync();
        }

        // GET: api/Composant/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SearchingComposant>> GetComposant(int id)
        {
            var composant = await _context.Composants.FindAsync(id);

            if (composant == null)
            {
                return NotFound();
            }

            return new SearchingComposant(composant);
        }


        // GET: api/Projets/5
        [HttpPost("search")]
        public async Task<List<SearchingComposant>> GetListeComposant([FromBody] SearchComposant search)
        {
            var listeComposant = _context.Composants.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.LibelleComposant))
                listeComposant = listeComposant.Where(p => p.LibelleComposant.ToLower().Contains(search.LibelleComposant.ToLower()));

            return await listeComposant.Select(p => new SearchingComposant(p)).ToListAsync();
        }





        // PUT: api/Composant/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComposant(int id, Composant composant)
        {
            if (id != composant.ID)
            {
                return BadRequest();
            }

            _context.Entry(composant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComposantExists(id))
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

        // POST: api/Composant
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Composant>> PostComposant(Composant composant)
        {
            _context.Composants.Add(composant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComposant", new { id = composant.ID }, composant);
        }

        // DELETE: api/Composant/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Composant>> DeleteComposant(int id)
        {
            var composant = await _context.Composants.FindAsync(id);
            if (composant == null)
            {
                return NotFound();
            }

            _context.Composants.Remove(composant);
            await _context.SaveChangesAsync();

            return composant;
        }

        private bool ComposantExists(int id)
        {
            return _context.Composants.Any(e => e.ID == id);
        }
    }
}
