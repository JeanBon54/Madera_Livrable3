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
    public class PlansController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PlansController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Plans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plan>>> GetPlans()
        {
            return await _context.Plans.ToListAsync();
        }

        // GET: api/Plans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Plan>> GetPlan(int id)
        {
            var plan = await _context.Plans.FindAsync(id);

            if (plan == null)
            {
                return NotFound();
            }

            return plan;
        }

        // PUT: api/Plans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlan(int id, Plan plan)
        {
            if (id != plan.ID)
            {
                return BadRequest();
            }

            _context.Entry(plan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanExists(id))
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



        // POST: api/Plans
        public async Task<ActionResult<Plan>> PostPlan(SavePlan @plan)
        {
            plan = await this.SavePlan(plan);

            return CreatedAtAction("GetPlan", new { id = @plan.ID }, @plan);
        }

        [HttpPatch]
        public async Task<ActionResult<Plan>> PatchPlan(SavePlan @plan)
        {
            plan = await this.SavePlan(plan);

            return CreatedAtAction("GetPlan", new { id = @plan.ID }, @plan);
        }




        private async Task<SavePlan> SavePlan(SavePlan @plan)
        {
            Plan newPlan = null;
            if (plan.ID == 0)
            {
                newPlan = new Plan();
                _context.Plans.Add(newPlan);
            }
            else
            {
                newPlan = _context.Plans.Where(pl => pl.ID == plan.ID).FirstOrDefault();

            }
            newPlan.libellePlan = plan.libellePlan;

            if (newPlan.ModulePlan == null) newPlan.ModulePlan = new List<ModulePlan>();


            newPlan.ModulePlan.Clear();


            await _context.SaveChangesAsync();


            if (plan.ListeIdModule != null && plan.ListeIdModule.Count() > 0)
            {
                newPlan.ModulePlan = @plan.ListeIdModule.Select(pl => new ModulePlan()
                {
                    PlanID = plan.ID,
                    ModuleID = pl.ID,
                    quantite = pl.quantite


                }).ToList();

                newPlan.ModulePlan.ToList().ForEach(plan => _context.ModulePlans.Add(plan));
            }

            await _context.SaveChangesAsync();

            return plan;
        }









        // DELETE: api/Plans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlan(int id)
        {
            var plan = await _context.Plans.FindAsync(id);
            if (plan == null)
            {
                return NotFound();
            }

            _context.Plans.Remove(plan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlanExists(int id)
        {
            return _context.Plans.Any(e => e.ID == id);
        }
    }
}
