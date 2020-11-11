using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrenomClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateNaissanceClient = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AdresseClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VilleClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CpClient = table.Column<int>(type: "int", nullable: false),
                    Telephone = table.Column<int>(type: "int", nullable: false),
                    EmailClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Commercial",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomCommercial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrenomCommercial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailCommercial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MdpCommercial = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Commercial", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "CoupePrincipale",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleCoupePrincipale = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LongueurCoupePrincipale = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    LargeurCoupePrincipale = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoupePrincipale", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Couverture",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypeCouverture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrixHtCouverture = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Couverture", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "FamilleComposant",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleFamilleComposant = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FamilleComposant", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Gamme",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleGamme = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeGamme = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeIsolantGamme = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QualiteHuisserieGamme = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gamme", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Modele",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleModele = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modele", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Module",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleModule = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrixHtModule = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    DebutPointX = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    FinPointX = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    DdebutPointY = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    FinPointY = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Module", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Plancher",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypePlancher = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrixPlancher = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plancher", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Slot",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleSlot = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Slot", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Projet",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CommercialID = table.Column<int>(type: "int", nullable: false),
                    ClientID = table.Column<int>(type: "int", nullable: false),
                    LibelleProjet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LibelleNom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LibelleRemarque = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateDebutProjet = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: true)
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
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FamilleComposantID = table.Column<int>(type: "int", nullable: false),
                    LibelleComposant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NatureComposant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CaractComposant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UniteUsageComposant = table.Column<int>(type: "int", nullable: false),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: true)
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

            migrationBuilder.CreateTable(
                name: "ModuleGammes",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    GammeID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleGammes", x => new { x.ModuleID, x.GammeID });
                    table.ForeignKey(
                        name: "FK_ModuleGammes_Gamme_GammeID",
                        column: x => x.GammeID,
                        principalTable: "Gamme",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ModuleGammes_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "ModuleModeles",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    ModeleID = table.Column<int>(type: "int", nullable: false),
                    quantite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleModeles", x => new { x.ModuleID, x.ModeleID });
                    table.ForeignKey(
                        name: "FK_ModuleModeles_Modele_ModeleID",
                        column: x => x.ModeleID,
                        principalTable: "Modele",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ModuleModeles_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Plan",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlancherID = table.Column<int>(type: "int", nullable: false),
                    CoupePrincipaleID = table.Column<int>(type: "int", nullable: false),
                    CouvertureID = table.Column<int>(type: "int", nullable: false),
                    ReferencePlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    libellePlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AdressPlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CpPlan = table.Column<int>(type: "int", nullable: false),
                    VillePlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plan", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Plan_CoupePrincipale_CoupePrincipaleID",
                        column: x => x.CoupePrincipaleID,
                        principalTable: "CoupePrincipale",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Plan_Couverture_CouvertureID",
                        column: x => x.CouvertureID,
                        principalTable: "Couverture",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Plan_Plancher_PlancherID",
                        column: x => x.PlancherID,
                        principalTable: "Plancher",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModuleSlots",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    SlotID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleSlots", x => new { x.ModuleID, x.SlotID });
                    table.ForeignKey(
                        name: "FK_ModuleSlots_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ModuleSlots_Slot_SlotID",
                        column: x => x.SlotID,
                        principalTable: "Slot",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "ModuleComposants",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    ComposantID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleComposants", x => new { x.ModuleID, x.ComposantID });
                    table.ForeignKey(
                        name: "FK_ModuleComposants_Composant_ComposantID",
                        column: x => x.ComposantID,
                        principalTable: "Composant",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ModuleComposants_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Devis",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleDevis = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EtatDevis = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PlanID = table.Column<int>(type: "int", nullable: false),
                    DateDebutDevis = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PrixTotalHtDevis = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    PrixTotalTtcDevis = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    MargeCommercialDevis = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    MargeEntrepriseDevis = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    IdUtilisateurCreation = table.Column<int>(type: "int", nullable: false),
                    DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdUtilisateurModification = table.Column<int>(type: "int", nullable: false),
                    DateModification = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateArchivage = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devis", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Devis_Plan_PlanID",
                        column: x => x.PlanID,
                        principalTable: "Plan",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModulePlans",
                columns: table => new
                {
                    PlanID = table.Column<int>(type: "int", nullable: false),
                    ModuleID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModulePlans", x => new { x.ModuleID, x.PlanID });
                    table.ForeignKey(
                        name: "FK_ModulePlans_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ModulePlans_Plan_PlanID",
                        column: x => x.PlanID,
                        principalTable: "Plan",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "ProjetPlans",
                columns: table => new
                {
                    ProjetID = table.Column<int>(type: "int", nullable: false),
                    PlanID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjetPlans", x => new { x.ProjetID, x.PlanID });
                    table.ForeignKey(
                        name: "FK_ProjetPlans_Plan_PlanID",
                        column: x => x.PlanID,
                        principalTable: "Plan",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ProjetPlans_Projet_ProjetID",
                        column: x => x.ProjetID,
                        principalTable: "Projet",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Composant_FamilleComposantID",
                table: "Composant",
                column: "FamilleComposantID");

            migrationBuilder.CreateIndex(
                name: "IX_Devis_PlanID",
                table: "Devis",
                column: "PlanID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleComposants_ComposantID",
                table: "ModuleComposants",
                column: "ComposantID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleGammes_GammeID",
                table: "ModuleGammes",
                column: "GammeID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleModeles_ModeleID",
                table: "ModuleModeles",
                column: "ModeleID");

            migrationBuilder.CreateIndex(
                name: "IX_ModulePlans_PlanID",
                table: "ModulePlans",
                column: "PlanID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleSlots_SlotID",
                table: "ModuleSlots",
                column: "SlotID");

            migrationBuilder.CreateIndex(
                name: "IX_Plan_CoupePrincipaleID",
                table: "Plan",
                column: "CoupePrincipaleID");

            migrationBuilder.CreateIndex(
                name: "IX_Plan_CouvertureID",
                table: "Plan",
                column: "CouvertureID");

            migrationBuilder.CreateIndex(
                name: "IX_Plan_PlancherID",
                table: "Plan",
                column: "PlancherID");

            migrationBuilder.CreateIndex(
                name: "IX_Projet_ClientID",
                table: "Projet",
                column: "ClientID");

            migrationBuilder.CreateIndex(
                name: "IX_Projet_CommercialID",
                table: "Projet",
                column: "CommercialID");

            migrationBuilder.CreateIndex(
                name: "IX_ProjetPlans_PlanID",
                table: "ProjetPlans",
                column: "PlanID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Devis");

            migrationBuilder.DropTable(
                name: "ModuleComposants");

            migrationBuilder.DropTable(
                name: "ModuleGammes");

            migrationBuilder.DropTable(
                name: "ModuleModeles");

            migrationBuilder.DropTable(
                name: "ModulePlans");

            migrationBuilder.DropTable(
                name: "ModuleSlots");

            migrationBuilder.DropTable(
                name: "ProjetPlans");

            migrationBuilder.DropTable(
                name: "Composant");

            migrationBuilder.DropTable(
                name: "Gamme");

            migrationBuilder.DropTable(
                name: "Modele");

            migrationBuilder.DropTable(
                name: "Module");

            migrationBuilder.DropTable(
                name: "Slot");

            migrationBuilder.DropTable(
                name: "Plan");

            migrationBuilder.DropTable(
                name: "Projet");

            migrationBuilder.DropTable(
                name: "FamilleComposant");

            migrationBuilder.DropTable(
                name: "CoupePrincipale");

            migrationBuilder.DropTable(
                name: "Couverture");

            migrationBuilder.DropTable(
                name: "Plancher");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Commercial");
        }
    }
}
