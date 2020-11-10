using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ProjetPlan
    {
        public int ProjetID { get; set; }
        public Projet Projet { get; set; }
        public int PlanID { get; set; }
        public Plan Plan { get; set; }
    }
}
