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
    public class ModelesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModelesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Modeles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Modele>>> GetModeles()
        {
            return await _context.Modeles.ToListAsync();
        }

        // GET: api/Modeles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Modele>> GetModele(int id)
        {
            var modele = await _context.Modeles.FindAsync(id);

            if (modele == null)
            {
                return NotFound();
            }

            return modele;
        }

        // PUT: api/Modeles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModele(int id, Modele modele)
        {
            if (id != modele.ID)
            {
                return BadRequest();
            }

            _context.Entry(modele).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModeleExists(id))
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

        // POST: api/Modeles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Modele>> PostModele(Modele modele)
        {
            _context.Modeles.Add(modele);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetModele", new { id = modele.ID }, modele);
        }

        // DELETE: api/Modeles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModele(int id)
        {
            var modele = await _context.Modeles.FindAsync(id);
            if (modele == null)
            {
                return NotFound();
            }

            _context.Modeles.Remove(modele);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModeleExists(int id)
        {
            return _context.Modeles.Any(e => e.ID == id);
        }
    }
}
