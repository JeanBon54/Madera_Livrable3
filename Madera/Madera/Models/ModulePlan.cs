using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModulePlan
    {
        public int PlanID { get; set; }
        public virtual Plan Plan { get; set; }
        public int ModuleID { get; set; }
        public virtual Module Module { get; set; }

        public int quantite { get; set; }

    }

    public class RechercheModulePlan
    {
        public int PlanID { get; set; }
        public int ModuleID { get; set; }
        public int quantite { get; set; }

    }


    public class LignesModule
    {
        public int PlanID { get; set; }
        public string LibelleModule { get; set; }
        public int QuantiteModule { get; set; }
        public decimal PrixModule { get; set; }
        public decimal SumModule { get; set; }
        public virtual Module Modules { get; set; }

    }


}
