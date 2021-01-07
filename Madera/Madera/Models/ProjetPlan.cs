using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ProjetPlan
    {
        public int ProjetID { get; set; }
        public virtual Projet Projet { get; set; }
        public int PlanID { get; set; }
        public virtual Plan Plan { get; set; }
    }

}
