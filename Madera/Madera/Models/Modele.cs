using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Modele
    {
        public int ID { get; set; }
        public string libelleModele { get; set; }

        public ICollection<Module> modules;
    }
}
