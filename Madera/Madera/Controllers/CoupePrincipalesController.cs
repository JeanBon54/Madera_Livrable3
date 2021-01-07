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
    public class CoupePrincipalesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CoupePrincipalesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/CoupePrincipales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RechercherCoupePrincipale>>> GetClients()
        {
            return await _context.CoupePrincipales.Select(p => new RechercherCoupePrincipale()
            {
                ID = p.ID,
                LibelleCoupePrincipale = p.LibelleCoupePrincipale,
                LongueurCoupePrincipale = p.LongueurCoupePrincipale,
                LargeurCoupePrincipale = p.LargeurCoupePrincipale

            }).ToListAsync();
        }

        // GET: api/CoupePrincipales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CoupePrincipale>> GetCoupePrincipale(int id)
        {
            var coupePrincipale = await _context.CoupePrincipales.FindAsync(id);

            if (coupePrincipale == null)
            {
                return NotFound();
            }

            return coupePrincipale;
        }

        // PUT: api/CoupePrincipales/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoupePrincipale(int id, CoupePrincipale coupePrincipale)
        {
            if (id != coupePrincipale.ID)
            {
                return BadRequest();
            }

            _context.Entry(coupePrincipale).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoupePrincipaleExists(id))
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

        // POST: api/CoupePrincipales
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CoupePrincipale>> PostCoupePrincipale(CoupePrincipale coupePrincipale)
        {
            _context.CoupePrincipales.Add(coupePrincipale);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCoupePrincipale", new { id = coupePrincipale.ID }, coupePrincipale);
        }

        // DELETE: api/CoupePrincipales/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoupePrincipale(int id)
        {
            var coupePrincipale = await _context.CoupePrincipales.FindAsync(id);
            if (coupePrincipale == null)
            {
                return NotFound();
            }

            _context.CoupePrincipales.Remove(coupePrincipale);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CoupePrincipaleExists(int id)
        {
            return _context.CoupePrincipales.Any(e => e.ID == id);
        }
    }
}
