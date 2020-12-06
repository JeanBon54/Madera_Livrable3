using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Madera.Models;
using Madera.Models.Search;
namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ModulesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Modules

        //public async Task<ActionResult<IEnumerable<SearchingModule>>> GetClients()
        //{
        //    return await _context.Modules.Select(p => new SearchingModule(p)).ToListAsync();
        //}
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Module>>> GetClients()
        {
            return await _context.Modules.ToListAsync();
        }

        // GET: api/Modules/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SearchingModule>> GetClient(int id)
        {
            var module = await _context.Modules.FindAsync(id);

            if (module == null)
            {
                return NotFound();
            }

            return new SearchingModule(module);
        }

        // GET: api/Projets/5
        [HttpPost("search")]
        public async Task<List<SearchingModule>> GetListeClient([FromBody] SearchModule search)
        {
            var listeModule = _context.Modules.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.LibelleModule))
                listeModule = listeModule.Where(p => p.LibelleModule.ToLower().Contains(search.LibelleModule.ToLower()));

            return await listeModule.Select(p => new SearchingModule(p)).ToListAsync();
        }



        // PUT: api/Modules/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModule(int id, Module @module)
        {
            if (id != @module.ID)
            {
                return BadRequest();
            }

            _context.Entry(@module).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleExists(id))
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

        /// <summary>
        /// Création d'un nouveau module
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<Module>> PostModule(SaveModule @module)
        {
            module = await this.SaveModule(module);

            return CreatedAtAction("GetModule", new { id = @module.ID }, @module);
        }

        [HttpPatch]
        public async Task<ActionResult<Module>> PatchModule(SaveModule @module)
        {
            module = await this.SaveModule(module);

            return CreatedAtAction("GetModule", new { id = @module.ID }, @module);
        }

        private async Task<SaveModule> SaveModule(SaveModule @module)
        {
            Module newModule = null;
            if (module.ID == 0) { 
                newModule = new Module();
                _context.Modules.Add(newModule);
            }
            else { 
                newModule = _context.Modules.Where(mo => mo.ID == module.ID).FirstOrDefault();
            }

            newModule.LibelleModule = module.LibelleModule;

            await _context.SaveChangesAsync();

            if (newModule.ModuleComposant == null) newModule.ModuleComposant = new List<ModuleComposant>();
            newModule.ModuleComposant.Clear();

            if (module.ListeIdComposant != null && module.ListeIdComposant.Count() > 0)
            {
                newModule.ModuleComposant = @module.ListeIdComposant.Select(idComp => new ModuleComposant()
                {
                    ComposantID = idComp,
                    ModuleID = module.ID
                }).ToList();

                newModule.ModuleComposant.ToList().ForEach(comp => _context.ModuleComposants.Add(comp));
            }

            await _context.SaveChangesAsync();

            return module;
        }

        // DELETE: api/Modules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModule(int id)
        {
            var @module = await _context.Modules.FindAsync(id);
            if (@module == null)
            {
                return NotFound();
            }

            _context.Modules.Remove(@module);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleExists(int id)
        {
            return _context.Modules.Any(e => e.ID == id);
        }
    }
}
