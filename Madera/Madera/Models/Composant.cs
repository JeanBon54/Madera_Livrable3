using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    [Table("COMPOSANT")]
    public class Composant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public int FamilleComposantID { get; set; }
        public string LibelleComposant { get; set; }
        public string NatureComposant { get; set; }
        public string CaractComposant { get; set; }
        public int UniteUsageComposant { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }

        public FamilleComposant familleComposant;
    }
}
