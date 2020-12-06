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
    [Authorize]
    [ApiController]
    public class ModulePlansController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModulePlansController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ModulePlans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModulePlan>>> GetModulePlans()
        {
            return await _context.ModulePlans.ToListAsync();
        }

        // GET: api/ModulePlans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModulePlan>> GetModulePlan(int id)
        {
            var modulePlan = await _context.ModulePlans.FindAsync(id);

            if (modulePlan == null)
            {
                return NotFound();
            }

            return modulePlan;
        }

        // PUT: api/ModulePlans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModulePlan(int id, ModulePlan modulePlan)
        {
            if (id != modulePlan.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(modulePlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModulePlanExists(id))
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

        // POST: api/ModulePlans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ModulePlan>> PostModulePlan(ModulePlan modulePlan)
        {
            _context.ModulePlans.Add(modulePlan);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModulePlanExists(modulePlan.ModuleID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModulePlan", new { id = modulePlan.ModuleID }, modulePlan);
        }


        // DELETE: api/ModulePlans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModulePlan(int id)
        {
            var modulePlan = await _context.ModulePlans.FindAsync(id);
            if (modulePlan == null)
            {
                return NotFound();
            }

            _context.ModulePlans.Remove(modulePlan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModulePlanExists(int id)
        {
            return _context.ModulePlans.Any(e => e.ModuleID == id);
        }
    }
}
