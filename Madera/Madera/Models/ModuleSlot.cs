using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModuleSlot
    {
        public int ModuleID { get; set; }
        public virtual Module Module { get; set; }
        public int SlotID { get; set; }
        public virtual Slot Slot { get; set; }
    }
}
