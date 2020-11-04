using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Modele
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LibelleModele { get; set; }

        [ForeignKey("ID")]
        public virtual ICollection<Module> modules { get; set; }
    }
}
