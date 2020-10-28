using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Slot
    {
        public int ID { get; set; }
        public int ModuleID { get; set; }
        public string LibelleSlot { get; set; }

        public Module module;
    }
}
