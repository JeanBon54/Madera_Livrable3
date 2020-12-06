using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Madera.Models;
using Madera.Models.Search;
using Madera._Services;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommercialsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private IUserService _userService;

        public CommercialsController(AppDbContext context, IUserService userService)
        {
            _context = context;
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        // GET: api/Commercials
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SearchingCommercial>>> GetCommercials()
        {
            return await _context.Commercials.Select(p => new SearchingCommercial(p)).ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Commercial>>> GetLoginCommercials()
        {
            return await _context.Commercials.ToListAsync();
        }

        // GET: api/Commercials/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<SearchingCommercial>> GetCommercial(int id)
        {
            var commercial = await _context.Commercials.FindAsync(id);

            if (commercial == null)
            {
                return NotFound();
            }

            return new SearchingCommercial(commercial);
        }


        // GET: api/Projets/5
        [Authorize]
        [HttpPost("search")]
        public async Task<List<SearchingCommercial>> GetListeCommercial([FromBody] SearchCommercial search)
        {
            var listeComercial = _context.Commercials.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.NomCommercial))
                listeComercial = listeComercial.Where(p => p.NomCommercial.ToLower().Contains(search.NomCommercial.ToLower()));

            return await listeComercial.Select(p => new SearchingCommercial(p)).ToListAsync();
        }





        // PUT: api/Commercials/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommercial(int id, Commercial commercial)
        {
            if (id != commercial.ID)
            {
                return BadRequest();
            }

            _context.Entry(commercial).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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

        // POST: api/Commercials
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Commercial>> PostCommercial(Commercial commercial)
        {
            _context.Commercials.Add(commercial);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommercial", new { id = commercial.ID }, commercial);
        }

        // DELETE: api/Commercials/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Commercial>> DeleteCommercial(int id)
        {
            var commercial = await _context.Commercials.FindAsync(id);
            if (commercial == null)
            {
                return NotFound();
            }

            _context.Commercials.Remove(commercial);
            await _context.SaveChangesAsync();

            return commercial;
        }

        private bool CommercialExists(int id)
        {
            return _context.Commercials.Any(e => e.ID == id);
        }
    }
}
