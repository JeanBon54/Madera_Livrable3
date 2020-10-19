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
        public DataType DATE_DEBUT_DEVIS { get; set; }
        public int PRIX_TOTAL_TTC_DEVIS { get; set; }
        public int MARGE_COMMERCIAL_DEVIS { get; set; }
        public DataType DATE_ARCHIVAGE_DEVIS { get; set; }
        public DataType DATE_MODIFICATION_DEVIS { get; set; }
        //public String UTILISATEUR_CREATION { get; set; }
        //public String UTILISATEUR_MODIFICATION { get; set; }
    }
}
