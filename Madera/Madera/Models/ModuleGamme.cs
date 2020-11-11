using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModuleGamme
    {
        public int ModuleID { get; set; }
        public virtual Module Module { get; set; }
        public int GammeID { get; set; }
        public virtual Gamme Gamme { get; set; }
    }
}
