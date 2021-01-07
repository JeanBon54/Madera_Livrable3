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
    public class CouverturesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CouverturesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Couvertures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RechercherCouverture>>> GetClients()
        {
            return await _context.Couvertures.Select(p => new RechercherCouverture()
            {
                ID = p.ID,
                TypeCouverture = p.TypeCouverture,
                PrixHtCouverture = p.PrixHtCouverture

            }).ToListAsync();
        }

        // GET: api/Couvertures/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Couverture>> GetCouverture(int id)
        {
            var couverture = await _context.Couvertures.FindAsync(id);

            if (couverture == null)
            {
                return NotFound();
            }

            return couverture;
        }

        // PUT: api/Couvertures/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCouverture(int id, Couverture couverture)
        {
            if (id != couverture.ID)
            {
                return BadRequest();
            }

            _context.Entry(couverture).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CouvertureExists(id))
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

        // POST: api/Couvertures
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Couverture>> PostCouverture(Couverture couverture)
        {
            _context.Couvertures.Add(couverture);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCouverture", new { id = couverture.ID }, couverture);
        }

        // DELETE: api/Couvertures/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCouverture(int id)
        {
            var couverture = await _context.Couvertures.FindAsync(id);
            if (couverture == null)
            {
                return NotFound();
            }

            _context.Couvertures.Remove(couverture);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CouvertureExists(int id)
        {
            return _context.Couvertures.Any(e => e.ID == id);
        }
    }
}
