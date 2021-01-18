﻿using System;
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
using Madera.Models.Search;
using GrapeCity.Documents.Pdf;
using System.Net;

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

        // GET: api/Devis
        [HttpGet("projet/{id}")]
        public async Task<ActionResult<IEnumerable<RechercheDevis>>> GetDevisProjet(int id)
        {

            var devis = _context.Devis.Select(p => new RechercheDevis()
            {
                ID = p.ID,
                LibelleDevis = p.LibelleDevis,
                EtatDevis = p.EtatDevis,
                PrixTotalHtDevis = p.PrixTotalHtDevis,
                PrixTotalTtcDevis = p.PrixTotalTtcDevis,
                DateCreation = p.DateCreation,
                DateModification = p.DateModification,
                PlanID = p.PlanID
            }).AsQueryable();

            devis.Where(x => x.ProjetID == id);

            return await devis.ToArrayAsync();

        }

        // GET: api/Devis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RechercheDevis>> GetDevis(int id)
        {
           
            var devis =  _context.Devis.Select(p => new RechercheDevis()
            {
                ID = p.ID,
                LibelleDevis = p.LibelleDevis,
                EtatDevis = p.EtatDevis,
                PrixTotalHtDevis = p.PrixTotalHtDevis,
                PrixTotalTtcDevis = p.PrixTotalTtcDevis,
                DateCreation = p.DateCreation,
                DateModification = p.DateModification,
                PlanID = p.PlanID
            }).AsQueryable();

            devis.Where(x => x.ProjetID == id);

            return await devis.FirstOrDefaultAsync();
        }

        // GET: api/Devis/5
        [HttpGet("lignes/{id}")]
        public async Task<ActionResult<IEnumerable<LignesDevis>>> GetLignesDevis(int id)
        {
            var lignes = _context.ModulePlans.Select(p => new LignesDevis()
            {
                LibelleModule = p.Module.LibelleModule,
                PlanID = p.PlanID,
                QuantiteModule = p.quantite,
                PrixModule = p.Module.prixModule,
            }).AsQueryable();

            lignes.Where(x => x.PlanID == id);

            return await lignes.ToArrayAsync();
        }

        // GET: api/Devis/5
        [HttpGet("extra/{id}")]
        public async Task<ActionResult<ExtraDevis>> GetExtraDevis(int id)
        {
            var lignes = _context.Plans.Select(p => new ExtraDevis()
            {
               prixCouverture = p.couverture.PrixHtCouverture,
               prixPlancher = p.plancher.PrixPlancher,
               largeurCoupePrincipal = p.coupePrincipales.LargeurCoupePrincipale,
               longueurCoupePrincipal = p.coupePrincipales.LongueurCoupePrincipale,
               libelleCoupePrincipal = p.coupePrincipales.LibelleCoupePrincipale,
               libelleCouverture = p.couverture.TypeCouverture,
               libellePlancher = p.plancher.TypePlancher,
               PlanID = p.ID
            }).AsQueryable();

            lignes.Where(x => x.PlanID == id);

            return await lignes.FirstOrDefaultAsync();
        }

        // GET: api/Projets/5
        [HttpPost("search")]
        public async Task<List<SearchingDevis>> GetListeDevis([FromBody] SearchDevis search)
        {
            var listeDevis = _context.Devis.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.LibelleDevis))
                listeDevis = listeDevis.Where(p => p.LibelleDevis.ToLower().Contains(search.LibelleDevis.ToLower()));

            return await listeDevis.Select(p => new SearchingDevis(p)).ToListAsync();
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
        [HttpPost("search")]
        public async Task<List<Devis>> GetListeProjet([FromBody] SearchDevis search)
        {
            var listeDevis =  _context.Devis.Select(p => p);

            if (!string.IsNullOrWhiteSpace(search.LibelleDevis))
                listeDevis = listeDevis.Where(p => p.LibelleDevis.ToLower().Contains(search.LibelleDevis.ToLower()));

            if (search.DateCreation != null)
                listeDevis = listeDevis.Where(p => p.DateCreation.Date == search.DateCreation);

            return await listeDevis.ToListAsync();
        }

        // GET: api/Devis/getpdf/5
        [HttpGet("getpdf/{id}")]
        public async Task<ActionResult<Devis>> Getpdf(int id)
        {
            var devis = await _context.Devis.FindAsync(id);
            
            var pdf = new createpdf();

            string templatePath = pdf.getTemplate();

            // Bind the template to data:
            var builder = new Stubble.Core.Builders.StubbleBuilder();
            var boundTemplate = builder.Build().Render(templatePath, new { Query = devis, Lignes = devis.Plan.ModulePlan, Projets = devis.Plan.ProjetPlans });


          
            string pdfPath = devis.LibelleDevis + ".pdf";

            // Render the bound HTML
            using (var re = new GcHtmlRenderer(boundTemplate))
            {
                re.ApplyGcPdfLicenseKey("maxime.masetto@viacesi.fr,E571738649846194#A0cJfLiQTOxYDN8kDN6gzM7EzN5IiOiQWSisnOiQkIsISP3c6VSFXYxpVT7J5LyR7bMBzbh5WcxJWbqRzYNhFUXpEVxkVewpGM5djRRhmVtRkV4h5LnRjQzVDN0lzV0p6Qz3mYPJHNaZWR9YkVsplZYZXSMJlcBVXRiojITJCLxUDM5ETO7ADN0IicfJye#4Xfd5nIzMkQBJiOiMkIsIyM6BCdl9kLgYGZQBicvZGI49WZtV7YvREIDdkI0IiTis7W0ICZyBlIsIyM5ATNzADI6ETMxAjMwIjI0ICdyNkIsIiNxITMwIDMyIiOiAHeFJCLiInZuk6clNWYpZHQvRHdlNXYt9SZtlGeh5mI0ISYONkIsUWdyRnOMwId");
                re.RenderToPdf(pdfPath);
            }

            // opens the generated PDF file
            ProcessStartInfo psi = new ProcessStartInfo() { FileName = pdfPath, UseShellExecute = true };
            Process.Start(psi);


            if (devis == null)
            {
                return NotFound();
            }

            return Ok();  // OK = 200
        }



    }
}
