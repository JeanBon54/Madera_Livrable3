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
    public class PlanchersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PlanchersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Planchers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RechercherPlancher>>> GetClients()
        {
            return await _context.Planchers.Select(p => new RechercherPlancher()
            {
                ID = p.ID,
                TypePlancher = p.TypePlancher,
                PrixPlancher = p.PrixPlancher

            }).ToListAsync();
        }
        // GET: api/Planchers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Plancher>> GetPlancher(int id)
        {
            var plancher = await _context.Planchers.FindAsync(id);

            if (plancher == null)
            {
                return NotFound();
            }

            return plancher;
        }

        // PUT: api/Planchers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlancher(int id, Plancher plancher)
        {
            if (id != plancher.ID)
            {
                return BadRequest();
            }

            _context.Entry(plancher).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlancherExists(id))
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

        // POST: api/Planchers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Plancher>> PostPlancher(Plancher plancher)
        {
            _context.Planchers.Add(plancher);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlancher", new { id = plancher.ID }, plancher);
        }

        // DELETE: api/Planchers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlancher(int id)
        {
            var plancher = await _context.Planchers.FindAsync(id);
            if (plancher == null)
            {
                return NotFound();
            }

            _context.Planchers.Remove(plancher);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlancherExists(int id)
        {
            return _context.Planchers.Any(e => e.ID == id);
        }
    }
}
