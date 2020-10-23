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

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Madera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class commercialController : ControllerBase
    {

        readonly DefaultContext commerDetails;
        public commercialController(DefaultContext commerContext)
        {
            commerDetails = commerContext;
        }

        //[HttpGet]
        //public IEnumerable<Commercial> Get()
        //{
        //    return commerDetails.Commercial.ToList();
        //}


        // GET: api/BlogPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Commercial>>> GetBlogPost()
        {
            return await commerDetails.Commercial.ToListAsync();
        }



        // POST: api/BlogPosts
        [HttpPost]
        public async Task<ActionResult<Commercial>> PostBlogPost(Commercial commercial)
        {
            commerDetails.Commercial.Add(commercial);
            await commerDetails.SaveChangesAsync();

            return CreatedAtAction("GetBlogPost", new { id = commercial.ID_COMMERCIAL }, commercial);
        }



        //[HttpPost]
        //public IActionResult Post([FromBody] Commercial obj)
        //{
        //    commerDetails.Commercial.Add(obj);
        //    commerDetails.SaveChanges();
        //    int? id = obj.ID_COMMERCIAL; // Yes it's here
        //    return Ok();
        //}

    }
}
