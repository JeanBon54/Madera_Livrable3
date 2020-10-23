using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Madera;
using Madera.Models;
using System.Collections;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Madera.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Madera.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class commercialController : Controller
    {
        private readonly DefaultContext _context;
        private readonly IDataRepository<Commercial> _repo;

        public commercialController(DefaultContext context, IDataRepository<Commercial> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/Projets
        [HttpGet]
        public IEnumerable<Commercial> GetCommercial()
        {
            return _context.Commercial.OrderByDescending(p => p.ID_COMMERCIAL);
        }

        // GET: api/Projets/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCommercial([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var commercial = await _context.Commercial.FindAsync(id);

            if (commercial == null)
            {
                return NotFound();
            }

            return Ok(commercial);
        }

        // PUT: api/BlogPosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommercial([FromRoute] int id, [FromBody] Commercial commercial)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != commercial.ID_COMMERCIAL)
            {
                return BadRequest();
            }

            _context.Entry(commercial).State = EntityState.Modified;

            try
            {
                _repo.Update(commercial);
                var save = await _repo.SaveAsync(commercial);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommercialExists(id))
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
        public async Task<IActionResult> PostCommercial([FromBody] Commercial commercial)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(commercial);
            var save = await _repo.SaveAsync(commercial);

            return CreatedAtAction("Getcommercial", new { id = commercial.ID_COMMERCIAL }, commercial);
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommercial([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var commercial = await _context.Commercial.FindAsync(id);
            if (commercial == null)
            {
                return NotFound();
            }

            _repo.Delete(commercial);
            var save = await _repo.SaveAsync(commercial);

            return Ok(commercial);
        }

        private bool CommercialExists(int id)
        {
            return _context.Commercial.Any(e => e.ID_COMMERCIAL == id);
        }

    }
}
