using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Slot
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LibelleSlot { get; set; }

        //Propriétés de navigation
        public virtual ICollection<ModuleSlot> ModuleSlots { get; set; }

    }
}
