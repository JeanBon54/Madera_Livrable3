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
    public class ProjetPlansController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjetPlansController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ProjetPlans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjetPlan>>> GetProjetPlans()
        {
            return await _context.ProjetPlans.ToListAsync();
        }

        // GET: api/ProjetPlans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjetPlan>> GetProjetPlan(int id)
        {
            var projetPlan = await _context.ProjetPlans.FindAsync(id);

            if (projetPlan == null)
            {
                return NotFound();
            }

            return projetPlan;
        }

        // PUT: api/ProjetPlans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjetPlan(int id, ProjetPlan projetPlan)
        {
            if (id != projetPlan.ProjetID)
            {
                return BadRequest();
            }

            _context.Entry(projetPlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjetPlanExists(id))
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

        [HttpPost("save")]
        public async Task<ActionResult<ProjetPlan>> PostNewPlan(ProjetPlan ProjetPlan)
        {
            _context.ProjetPlans.Add(ProjetPlan);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/ProjetPlans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjetPlan(int id)
        {
            var projetPlan = await _context.ProjetPlans.FindAsync(id);
            if (projetPlan == null)
            {
                return NotFound();
            }

            _context.ProjetPlans.Remove(projetPlan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjetPlanExists(int id)
        {
            return _context.ProjetPlans.Any(e => e.ProjetID == id);
        }
    }
}
