using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModuleSlot
    {
        public int ModuleID { get; set; }
        public Module Module { get; set; }
        public int SlotID { get; set; }
        public Plan Slot { get; set; }
    }
}
