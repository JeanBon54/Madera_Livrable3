using System;
namespace Madera.Models
{
    public class ModuleModele
    {
        public int ModuleID { get; set; }
        public virtual Module Module { get; set; }
        public int ModeleID { get; set; }
        public virtual Modele Modele { get; set; }
        public int quantite { get; set; }
    }
}
