using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Madera.Models;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GammesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GammesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Gammes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gamme>>> GetGammes()
        {
            return await _context.Gammes.ToListAsync();
        }

        // GET: api/Gammes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gamme>> GetGamme(int id)
        {
            var gamme = await _context.Gammes.FindAsync(id);

            if (gamme == null)
            {
                return NotFound();
            }

            return gamme;
        }

        // PUT: api/Gammes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGamme(int id, Gamme gamme)
        {
            if (id != gamme.ID)
            {
                return BadRequest();
            }

            _context.Entry(gamme).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GammeExists(id))
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

        // POST: api/Gammes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Gamme>> PostGamme(Gamme gamme)
        {
            _context.Gammes.Add(gamme);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGamme", new { id = gamme.ID }, gamme);
        }

        // DELETE: api/Gammes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGamme(int id)
        {
            var gamme = await _context.Gammes.FindAsync(id);
            if (gamme == null)
            {
                return NotFound();
            }

            _context.Gammes.Remove(gamme);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GammeExists(int id)
        {
            return _context.Gammes.Any(e => e.ID == id);
        }
    }
}
