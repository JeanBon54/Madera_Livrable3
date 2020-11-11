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
    public class ModuleModelesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModuleModelesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ModuleModeles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModuleModele>>> GetModuleModeles()
        {
            return await _context.ModuleModeles.ToListAsync();
        }

        // GET: api/ModuleModeles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModuleModele>> GetModuleModele(int id)
        {
            var moduleModele = await _context.ModuleModeles.FindAsync(id);

            if (moduleModele == null)
            {
                return NotFound();
            }

            return moduleModele;
        }

        // PUT: api/ModuleModeles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModuleModele(int id, ModuleModele moduleModele)
        {
            if (id != moduleModele.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(moduleModele).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleModeleExists(id))
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

        // POST: api/ModuleModeles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ModuleModele>> PostModuleModele(ModuleModele moduleModele)
        {
            _context.ModuleModeles.Add(moduleModele);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ModuleModeleExists(moduleModele.ModuleID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetModuleModele", new { id = moduleModele.ModuleID }, moduleModele);
        }

        // DELETE: api/ModuleModeles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModuleModele(int id)
        {
            var moduleModele = await _context.ModuleModeles.FindAsync(id);
            if (moduleModele == null)
            {
                return NotFound();
            }

            _context.ModuleModeles.Remove(moduleModele);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleModeleExists(int id)
        {
            return _context.ModuleModeles.Any(e => e.ModuleID == id);
        }
    }
}
