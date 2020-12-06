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
    [Authorize]
    [ApiController]
    public class FamilleComposantsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FamilleComposantsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/familleComposant
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SearchingFamilleComposant>>> GetFamilleComposants()
        {
            return await _context.FamilleComposants.Select(p => new SearchingFamilleComposant(p)).ToListAsync();
        }

        // GET: api/familleComposant/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SearchingFamilleComposant>> GetFamilleComposant(int id)
        {
            var familleComposant = await _context.FamilleComposants.FindAsync(id);

            if (familleComposant == null)
            {
                return NotFound();
            }

            return new SearchingFamilleComposant(familleComposant);
        }


        [HttpPost("search")]
        public async Task<List<SearchingFamilleComposant>> GetListeFamilleComposant([FromBody] SearchFamilleComposant search)
        {
            var listeFamilleComposant = _context.FamilleComposants.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.LibelleFamilleComposant))
                listeFamilleComposant = listeFamilleComposant.Where(p => p.LibelleFamilleComposant.ToLower().Contains(search.LibelleFamilleComposant.ToLower()));

            return await listeFamilleComposant.Select(p => new SearchingFamilleComposant(p)).ToListAsync();
        }



        // PUT: api/familleComposant/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFamilleComposant(int id, FamilleComposant familleComposant)
        {
            if (id != familleComposant.ID)
            {
                return BadRequest();
            }

            _context.Entry(familleComposant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FamilleComposantExists(id))
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

        // POST: api/familleComposant
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<FamilleComposant>> PostFamilleComposant(FamilleComposant familleComposant)
        {
            _context.FamilleComposants.Add(familleComposant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFamilleComposant", new { id = familleComposant.ID }, familleComposant);
        }

        // DELETE: api/familleComposant/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FamilleComposant>> DeleteFamilleComposant(int id)
        {
            var familleComposant = await _context.FamilleComposants.FindAsync(id);
            if (familleComposant == null)
            {
                return NotFound();
            }

            _context.FamilleComposants.Remove(familleComposant);
            await _context.SaveChangesAsync();

            return familleComposant;
        }

        private bool FamilleComposantExists(int id)
        {
            return _context.FamilleComposants.Any(e => e.ID == id);
        }
    }
}
