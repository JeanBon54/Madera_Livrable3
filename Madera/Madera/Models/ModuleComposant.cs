using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModuleComposant
    {
        public int ModuleID { get; set; }
        public Module Module { get; set; }
        public int ComposantID { get; set; }
        public Composant Composant { get; set; }
    }
}
