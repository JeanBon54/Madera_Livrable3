using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class CoupePrincipale
    {
        public int ID { get; set; }
        public string libelleCoupePrincipale { get; set; }
        public decimal longueurCoupePrincipale { get; set; }
        public decimal largeurCoupePrincipale { get; set; }

        public Plan plan;
    }
}
