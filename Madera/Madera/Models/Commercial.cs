using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    [Table("COMMERCIAL")]
    public class Commercial
    {
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       [Key]
        public int? ID_COMMERCIAL { get; set; }
        public String NOM_COMMERCIAL { get; set; }
        public String PRENOM_COMMERCIAL { get; set; }
        public String EMAIL_COMMERCIAL { get; set; }
        public String MDP_COMMERCIAL { get; set; }
        //public DateTime DATE_CREATION_COMMERCIAL { get; set; }
        //public DateTime DATE_MODIFICATION_COMMERCIAL { get; set; }
        //public DateTime DATE_ARCHIVAGE_COMMERCIAL { get; set; }
        public String REMARQUE_COMMERCIAL { get; set; }
        //public int UTILISATEUR_CREATION { get; set; }
        //public int UTILISATEUR_MODIFICATION { get; set; }
    }
}
