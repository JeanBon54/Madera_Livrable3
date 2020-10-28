using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Couverture
    {
        public int ID { get; set; }
        public string TypeCouverture {  get; set; }
        public decimal PrixHtCouverture { get; set; }

        public ICollection<Plan> plans;
    }
}
