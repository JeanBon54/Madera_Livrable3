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
    public class ModuleGammesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModuleGammesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ModuleGammes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModuleGamme>>> GetModuleGammes()
        {
            return await _context.ModuleGammes.ToListAsync();
        }

        // GET: api/ModuleGammes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModuleGamme>> GetModuleGamme(int id)
        {
            var moduleGamme = await _context.ModuleGammes.FindAsync(id);

            if (moduleGamme == null)
            {
                return NotFound();
            }

            return moduleGamme;
        }

        // PUT: api/ModuleGammes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModuleGamme(int id, ModuleGamme moduleGamme)
        {
            if (id != moduleGamme.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(moduleGamme).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleGammeExists(id))
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

        // POST: api/ModuleGammes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ModuleGamme>> PostModuleGamme(ModuleGamme moduleGamme)
        {
            _context.ModuleGammes.Add(moduleGamme);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModuleGammeExists(moduleGamme.ModuleID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModuleGamme", new { id = moduleGamme.ModuleID }, moduleGamme);
        }

        // DELETE: api/ModuleGammes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModuleGamme(int id)
        {
            var moduleGamme = await _context.ModuleGammes.FindAsync(id);
            if (moduleGamme == null)
            {
                return NotFound();
            }

            _context.ModuleGammes.Remove(moduleGamme);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleGammeExists(int id)
        {
            return _context.ModuleGammes.Any(e => e.ModuleID == id);
        }
    }
}
