using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModulePlan
    {
        public int ModuleID { get; set; }
        public Module Module { get; set; }
        public int PlanID { get; set; }
        public Plan Plan { get; set; }
    }
}
