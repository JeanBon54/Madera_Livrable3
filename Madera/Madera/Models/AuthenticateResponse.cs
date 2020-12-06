using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Madera.Models;

namespace Madera.Models
{
    public class AuthenticateResponse
    {
        public int ID { get; set; }
        public string Token { get; set; } 


        public AuthenticateResponse(Commercial commercial, string token)
        {
            ID = commercial.ID;
            Token = token;
        }
    }
}
