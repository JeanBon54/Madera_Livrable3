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
    public class ModuleComposantsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModuleComposantsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ModuleComposants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModuleComposant>>> GetModuleComposants()
        {
            return await _context.ModuleComposants.ToListAsync();
        }

        // GET: api/ModuleComposants/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModuleComposant>> GetModuleComposant(int id)
        {
            var moduleComposant = await _context.ModuleComposants.FindAsync(id);

            if (moduleComposant == null)
            {
                return NotFound();
            }

            return moduleComposant;
        }

        // PUT: api/ModuleComposants/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModuleComposant(int id, ModuleComposant moduleComposant)
        {
            if (id != moduleComposant.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(moduleComposant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleComposantExists(id))
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

        // POST: api/ModuleComposants
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ModuleComposant>> PostModuleComposant(ModuleComposant moduleComposant)
        {
            _context.ModuleComposants.Add(moduleComposant);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModuleComposantExists(moduleComposant.ModuleID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModuleComposant", new { id = moduleComposant.ModuleID }, moduleComposant);
        }

        // DELETE: api/ModuleComposants/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModuleComposant(int id)
        {
            var moduleComposant = await _context.ModuleComposants.FindAsync(id);
            if (moduleComposant == null)
            {
                return NotFound();
            }

            _context.ModuleComposants.Remove(moduleComposant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleComposantExists(int id)
        {
            return _context.ModuleComposants.Any(e => e.ModuleID == id);
        }
    }
}
