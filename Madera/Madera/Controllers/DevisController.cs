using System;
using System.IO;
using System.Diagnostics;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stubble.Core;
using GrapeCity.Documents.Html;
using Madera.Models;

namespace Madera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevisController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DevisController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Devis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Devis>>> GetDevis()
        {
            return await _context.Devis.ToListAsync();
        }

        // GET: api/Devis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Devis>> GetDevis(int id)
        {
            var devis = await _context.Devis.FindAsync(id);

            if (devis == null)
            {
                return NotFound();
            }

            return devis;
        }

        // PUT: api/Devis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDevis(int id, Devis devis)
        {
            if (id != devis.ID)
            {
                return BadRequest();
            }

            _context.Entry(devis).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevisExists(id))
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

        // POST: api/Devis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Devis>> PostDevis(Devis devis)
        {
            _context.Devis.Add(devis);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDevis", new { id = devis.ID }, devis);
        }

        // DELETE: api/Devis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDevis(int id)
        {
            var devis = await _context.Devis.FindAsync(id);
            if (devis == null)
            {
                return NotFound();
            }

            _context.Devis.Remove(devis);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DevisExists(int id)
        {
            return _context.Devis.Any(e => e.ID == id);
        }

        // GET: api/Devis/5
        [HttpGet("genpdf/{id}")]
        public async Task<ActionResult<Devis>> Getpdf(int id)
        {
            var devis = await _context.Devis.FindAsync(id);

            var pdf = new createpdf();

            string templatePath = pdf.getTemplate();

            // Bind the template to data:
            var builder = new Stubble.Core.Builders.StubbleBuilder();
            var boundTemplate = builder.Build().Render(templatePath, new { Query = devis });


          
            string pdfPath = "pdftest.pdf";

            // Render the bound HTML
            using (var re = new GcHtmlRenderer(boundTemplate))
            {
                re.RenderToPdf(pdfPath);
            }

            // opens the generated PDF file
            ProcessStartInfo psi = new ProcessStartInfo() { FileName = pdfPath, UseShellExecute = true };
            Process.Start(psi);

            if (devis == null)
            {
                return NotFound();
            }

            return devis;
        }



    }
}
