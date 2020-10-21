using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Client
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID_CLIENT { get; set; }
        public String NOM_CLIENT { get; set; }
        public String PRENOM_CLIENT { get; set; }
        public String ADRESSE_CLIENT { get; set; }
        public String VILLE_CLIENT { get; set; }
        public DateTime DATE_CREATION_CLIENT { get; set; }
        public DateTime DATE_MODIFICATION_CLIENT { get; set; }
        //public DateTime DATE_ARCHIVAGE_CLIENT { get; set; }
        //public String REMARQUE_CLIENT { get; set; }
        //public int UTILISATEUR_CREATION { get; set; }
        //public int UTILISATEUR_MODIFICATION { get; set; }
    }
}
