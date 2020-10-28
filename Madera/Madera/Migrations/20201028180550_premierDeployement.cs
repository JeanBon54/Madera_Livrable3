using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class premierDeployement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomClient = table.Column<string>(nullable: false),
                    PrenomClient = table.Column<string>(nullable: false),
                    DateNaissanceClient = table.Column<DateTime>(nullable: false),
                    AdresseClient = table.Column<string>(nullable: false),
                    VilleClient = table.Column<string>(nullable: false),
                    CpClient = table.Column<int>(nullable: false),
                    Telephone = table.Column<int>(nullable: false),
                    EmailClient = table.Column<string>(nullable: false),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Commercial",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomCommercial = table.Column<string>(nullable: true),
                    PrenomCommercial = table.Column<string>(nullable: true),
                    EmailCommerce = table.Column<string>(nullable: true),
                    MdpCommercial = table.Column<string>(nullable: true),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Commercial", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "CoupePrincipale",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    libelleCoupePrincipale = table.Column<string>(nullable: true),
                    longueurCoupePrincipale = table.Column<decimal>(nullable: false),
                    largeurCoupePrincipale = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoupePrincipale", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Couverture",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypeCouverture = table.Column<string>(nullable: true),
                    PrixHtCouverture = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Couverture", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Devis",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlanID = table.Column<int>(nullable: false),
                    LibelleDevis = table.Column<string>(nullable: true),
                    EtatDevis = table.Column<string>(nullable: true),
                    DateDebutDevis = table.Column<DateTime>(nullable: false),
                    PrixTotalHtDevis = table.Column<decimal>(nullable: false),
                    PrixTotalTtcDevis = table.Column<decimal>(nullable: false),
                    MargeCommercialDevis = table.Column<decimal>(nullable: false),
                    MargeEntrepriseDevis = table.Column<decimal>(nullable: false),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devis", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FamilleComposant",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LIBELLE_FAMILLE_COMPOSANT = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FamilleComposant", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Gamme",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleGamme = table.Column<string>(nullable: true),
                    TypeGamme = table.Column<string>(nullable: true),
                    TypeIsolantGamme = table.Column<string>(nullable: true),
                    QualiteHuisserieGamme = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gamme", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Modele",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    libelleModele = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modele", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Module",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GammeID = table.Column<int>(nullable: false),
                    PlanID = table.Column<int>(nullable: false),
                    LibelleModule = table.Column<string>(nullable: true),
                    PrixHtModule = table.Column<decimal>(nullable: false),
                    DebutPointX = table.Column<decimal>(nullable: false),
                    FinPointX = table.Column<decimal>(nullable: false),
                    DdebutPointY = table.Column<decimal>(nullable: false),
                    FinPointY = table.Column<decimal>(nullable: false),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Module", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Plan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlancherID = table.Column<int>(nullable: false),
                    CoupePrincipaleID = table.Column<int>(nullable: false),
                    CouvertureID = table.Column<int>(nullable: false),
                    ReferencePlan = table.Column<string>(nullable: true),
                    libellePlan = table.Column<string>(nullable: true),
                    AdressPlan = table.Column<string>(nullable: true),
                    CpPlan = table.Column<int>(nullable: false),
                    VillePlan = table.Column<string>(nullable: true),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plan", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Plancher",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypePlancher = table.Column<string>(nullable: true),
                    PrixPlancher = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plancher", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Slot",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModuleID = table.Column<int>(nullable: false),
                    LibelleSlot = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Slot", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Projet",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CommercialID = table.Column<int>(nullable: false),
                    ClientID = table.Column<int>(nullable: false),
                    LibelleProjet = table.Column<string>(nullable: false),
                    LibelleNom = table.Column<string>(nullable: false),
                    LibelleRemarque = table.Column<string>(nullable: true),
                    DateDebutProjet = table.Column<DateTime>(nullable: false),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projet", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Projet_Client_ClientID",
                        column: x => x.ClientID,
                        principalTable: "Client",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Projet_Commercial_CommercialID",
                        column: x => x.CommercialID,
                        principalTable: "Commercial",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Composant",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FamilleComposantID = table.Column<int>(nullable: false),
                    LibelleComposant = table.Column<string>(nullable: true),
                    NatureComposant = table.Column<string>(nullable: true),
                    CaractComposant = table.Column<string>(nullable: true),
                    UniteUsageComposant = table.Column<int>(nullable: false),
                    IdUtilisateurCreation = table.Column<int>(nullable: false),
                    DateCreation = table.Column<DateTime>(nullable: false),
                    IdUtilisateurModification = table.Column<int>(nullable: false),
                    DateModification = table.Column<DateTime>(nullable: false),
                    DateArchivage = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Composant", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Composant_FamilleComposant_FamilleComposantID",
                        column: x => x.FamilleComposantID,
                        principalTable: "FamilleComposant",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Composant_FamilleComposantID",
                table: "Composant",
                column: "FamilleComposantID");

            migrationBuilder.CreateIndex(
                name: "IX_Projet_ClientID",
                table: "Projet",
                column: "ClientID");

            migrationBuilder.CreateIndex(
                name: "IX_Projet_CommercialID",
                table: "Projet",
                column: "CommercialID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Composant");

            migrationBuilder.DropTable(
                name: "CoupePrincipale");

            migrationBuilder.DropTable(
                name: "Couverture");

            migrationBuilder.DropTable(
                name: "Devis");

            migrationBuilder.DropTable(
                name: "Gamme");

            migrationBuilder.DropTable(
                name: "Modele");

            migrationBuilder.DropTable(
                name: "Module");

            migrationBuilder.DropTable(
                name: "Plan");

            migrationBuilder.DropTable(
                name: "Plancher");

            migrationBuilder.DropTable(
                name: "Projet");

            migrationBuilder.DropTable(
                name: "Slot");

            migrationBuilder.DropTable(
                name: "FamilleComposant");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Commercial");
        }
    }
}
