using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Devis
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID_DEVIS { get; set; }
        public String LIBELLE_DEVIS { get; set; }
        public String ETAT_DEVIS { get; set; }
        public DateTime DATE_DEBUT_DEVIS { get; set; }
        public decimal PRIX_TOTAL_TTC_DEVIS { get; set; }
        public decimal MARGE_COMMERCIAL_DEVIS { get; set; }
        public DateTime DATE_ARCHIVAGE_DEVIS { get; set; }
        public DateTime DATE_MODIFICATION_DEVIS { get; set; }
        //public String UTILISATEUR_CREATION { get; set; }
        //public String UTILISATEUR_MODIFICATION { get; set; }
    }
}
