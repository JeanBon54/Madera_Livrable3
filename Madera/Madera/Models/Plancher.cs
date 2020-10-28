using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Plancher
    {
        public int ID { get; set; }
        public string TypePlancher { get; set; }
        public decimal PrixPlancher { get; set; }

        public ICollection<Plan> plans;
    }
}
