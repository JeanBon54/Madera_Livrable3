using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
using Madera.Data;
using Microsoft.EntityFrameworkCore;

namespace Madera.Controllers
{

        [Produces("application/json")]
        [Route("api/[controller]")]
        [ApiController]
        public class ProjetController : Controller
        {
            private readonly DefaultContext _context;
            private readonly IDataRepository<Projet> _repo;

            public ProjetController(DefaultContext context, IDataRepository<Projet> repo)
            {
                _context = context;
                _repo = repo;
            }

            // GET: api/Projets
            [HttpGet]
            public IEnumerable<Projet> GetProjet()
            {
                return _context.Projet.OrderByDescending(p => p.ID);
            }

            // GET: api/Projets/5
            [HttpGet("{id}")]
            public async Task<IActionResult> GetProjet([FromRoute] int id)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var projet = await _context.Projet.FindAsync(id);

                if (projet == null)
                {
                    return NotFound();
                }

                return Ok(projet);
            }

            // PUT: api/Projets/5
            [HttpPut("{id}")]
            public async Task<IActionResult> PutProjet([FromRoute] int id, [FromBody] Projet projet)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != projet.ID)
                {
                    return BadRequest();
                }

                _context.Entry(projet).State = EntityState.Modified;

                try
                {
                    _repo.Update(projet);
                    var save = await _repo.SaveAsync(projet);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProjetExists(id))
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

            // POST: api/Projets
            [HttpPost]
            public async Task<IActionResult> PostProjet([FromBody] Projet projet)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                _repo.Add(projet);
                var save = await _repo.SaveAsync(projet);

                return CreatedAtAction("GetProjet", new { id = projet.ID }, projet);
            }

            // DELETE: api/BlogPosts/5
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteProjet([FromRoute] int id)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var projet = await _context.Projet.FindAsync(id);
                if (projet == null)
                {
                    return NotFound();
                }

                _repo.Delete(projet);
                var save = await _repo.SaveAsync(projet);

                return Ok(projet);
            }

            private bool ProjetExists(int id)
            {
                return _context.Projet.Any(e => e.ID == id);
            }

        }
    }


