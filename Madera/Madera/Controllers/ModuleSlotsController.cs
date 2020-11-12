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
    public class ModuleSlotsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModuleSlotsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ModuleSlots
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModuleSlot>>> GetModuleSlots()
        {
            return await _context.ModuleSlots.ToListAsync();
        }

        // GET: api/ModuleSlots/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModuleSlot>> GetModuleSlot(int id)
        {
            var moduleSlot = await _context.ModuleSlots.FindAsync(id);

            if (moduleSlot == null)
            {
                return NotFound();
            }

            return moduleSlot;
        }

        // PUT: api/ModuleSlots/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModuleSlot(int id, ModuleSlot moduleSlot)
        {
            if (id != moduleSlot.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(moduleSlot).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleSlotExists(id))
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

        // POST: api/ModuleSlots
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ModuleSlot>> PostModuleSlot(ModuleSlot moduleSlot)
        {
            _context.ModuleSlots.Add(moduleSlot);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModuleSlotExists(moduleSlot.ModuleID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModuleSlot", new { id = moduleSlot.ModuleID }, moduleSlot);
        }

        // DELETE: api/ModuleSlots/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModuleSlot(int id)
        {
            var moduleSlot = await _context.ModuleSlots.FindAsync(id);
            if (moduleSlot == null)
            {
                return NotFound();
            }

            _context.ModuleSlots.Remove(moduleSlot);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleSlotExists(int id)
        {
            return _context.ModuleSlots.Any(e => e.ModuleID == id);
        }
    }
}
