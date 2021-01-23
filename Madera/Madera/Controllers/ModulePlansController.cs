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
    public class ModulePlansController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModulePlansController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ModulePlans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RechercheModulePlan>>> GetCommandes()
        {
            return await _context.ModulePlans.Select(p => new RechercheModulePlan()
            {
                PlanID = p.PlanID,
                ModuleID = p.ModuleID,
                quantite = p.quantite,
            }).ToListAsync();
        }

        // GET: api/ModulePlans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<RechercheModulePlan>>> GetMP(int id)
        {
            return await _context.ModulePlans.Select(p => new RechercheModulePlan()
            {
                PlanID = p.PlanID,
                ModuleID = p.ModuleID,
                quantite = p.quantite,

            }).Where(p => p.PlanID == id).ToListAsync(); ;

        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<IEnumerable<RechercheModulePlan>>> GetPlanProjet(int id)
        //{
        //    return await _context.ModulePlans.Select(p => new RechercheModulePlan()
        //    {
        //        PlanID = p.PlanID,
        //        ModuleID = p.ModuleID,
        //        quantite = p.quantite,

        //    }).Where(p => p.PlanID == id).ToListAsync(); ;

        //}



        // PUT: api/ModulePlans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754



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
