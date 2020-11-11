using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModulePlan
    {
        public int ModuleID { get; set; }
        public virtual Module Module { get; set; }
        public int PlanID { get; set; }
        public virtual Plan Plan { get; set; }
    }
}
