using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModuleGamme
    {
        public int ModuleID { get; set; }
        public Module Module { get; set; }
        public int GammeID { get; set; }
        public Gamme Gamme { get; set; }
    }
}
