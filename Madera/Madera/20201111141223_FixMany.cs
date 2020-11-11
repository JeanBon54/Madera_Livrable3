using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class FixMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devis_Plan_PlanID",
                table: "Devis");

            migrationBuilder.DropForeignKey(
                name: "FK_Module_Gamme_GammeID",
                table: "Module");

            migrationBuilder.DropForeignKey(
                name: "FK_Module_Modele_ID",
                table: "Module");

            migrationBuilder.DropIndex(
                name: "IX_Module_GammeID",
                table: "Module");

            migrationBuilder.RenameColumn(
                name: "GammeID",
                table: "Module",
                newName: "SlotID");

            migrationBuilder.RenameColumn(
                name: "LibelleFamilleComposant",
                table: "FamilleComposant",
                newName: "LIBELLE_FAMILLE_COMPOSANT");

            migrationBuilder.RenameColumn(
                name: "EmailCommerce",
                table: "Commercial",
                newName: "EmailCommercial");

            migrationBuilder.AddColumn<int>(
                name: "ModuleID",
                table: "Plan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SlotID",
                table: "Plan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "PlanID",
                table: "Module",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "PlanID",
                table: "Devis",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ProjetID",
                table: "Devis",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ComposantModule",
                columns: table => new
                {
                    ComposantsID = table.Column<int>(type: "int", nullable: false),
                    ModulesID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComposantModule", x => new { x.ComposantsID, x.ModulesID });
                    table.ForeignKey(
                        name: "FK_ComposantModule_Composant_ComposantsID",
                        column: x => x.ComposantsID,
                        principalTable: "Composant",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ComposantModule_Module_ModulesID",
                        column: x => x.ModulesID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GammeModule",
                columns: table => new
                {
                    GammesID = table.Column<int>(type: "int", nullable: false),
                    ModulesID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GammeModule", x => new { x.GammesID, x.ModulesID });
                    table.ForeignKey(
                        name: "FK_GammeModule_Gamme_GammesID",
                        column: x => x.GammesID,
                        principalTable: "Gamme",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GammeModule_Module_ModulesID",
                        column: x => x.ModulesID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModeleModule",
                columns: table => new
                {
                    ModelesID = table.Column<int>(type: "int", nullable: false),
                    modulesID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModeleModule", x => new { x.ModelesID, x.modulesID });
                    table.ForeignKey(
                        name: "FK_ModeleModule_Modele_ModelesID",
                        column: x => x.ModelesID,
                        principalTable: "Modele",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModeleModule_Module_modulesID",
                        column: x => x.modulesID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModuleComposant",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    ComposantID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleComposant", x => new { x.ModuleID, x.ComposantID });
                    table.ForeignKey(
                        name: "FK_ModuleComposant_Composant_ComposantID",
                        column: x => x.ComposantID,
                        principalTable: "Composant",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModuleComposant_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModuleGamme",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    GammeID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleGamme", x => new { x.ModuleID, x.GammeID });
                    table.ForeignKey(
                        name: "FK_ModuleGamme_Gamme_GammeID",
                        column: x => x.GammeID,
                        principalTable: "Gamme",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModuleGamme_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModuleModele",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    ModeleID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleModele", x => new { x.ModuleID, x.ModeleID });
                    table.ForeignKey(
                        name: "FK_ModuleModele_Modele_ModeleID",
                        column: x => x.ModeleID,
                        principalTable: "Modele",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModuleModele_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModulePlan",
                columns: table => new
                {
                    PlanID = table.Column<int>(type: "int", nullable: false),
                    ModuleID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModulePlan", x => new { x.ModuleID, x.PlanID });
                    table.ForeignKey(
                        name: "FK_ModulePlan_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModulePlan_Plan_PlanID",
                        column: x => x.PlanID,
                        principalTable: "Plan",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModuleSlot",
                columns: table => new
                {
                    ModuleID = table.Column<int>(type: "int", nullable: false),
                    SlotID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleSlot", x => new { x.ModuleID, x.SlotID });
                    table.ForeignKey(
                        name: "FK_ModuleSlot_Module_ModuleID",
                        column: x => x.ModuleID,
                        principalTable: "Module",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModuleSlot_Slot_SlotID",
                        column: x => x.SlotID,
                        principalTable: "Slot",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PlanProjet",
                columns: table => new
                {
                    PlansID = table.Column<int>(type: "int", nullable: false),
                    ProjetsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanProjet", x => new { x.PlansID, x.ProjetsID });
                    table.ForeignKey(
                        name: "FK_PlanProjet_Plan_PlansID",
                        column: x => x.PlansID,
                        principalTable: "Plan",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PlanProjet_Projet_ProjetsID",
                        column: x => x.ProjetsID,
                        principalTable: "Projet",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjetPlan",
                columns: table => new
                {
                    ProjetID = table.Column<int>(type: "int", nullable: false),
                    PlanID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjetPlan", x => new { x.ProjetID, x.PlanID });
                    table.ForeignKey(
                        name: "FK_ProjetPlan_Plan_PlanID",
                        column: x => x.PlanID,
                        principalTable: "Plan",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjetPlan_Projet_ProjetID",
                        column: x => x.ProjetID,
                        principalTable: "Projet",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Plan_ModuleID",
                table: "Plan",
                column: "ModuleID");

            migrationBuilder.CreateIndex(
                name: "IX_Plan_SlotID",
                table: "Plan",
                column: "SlotID");

            migrationBuilder.CreateIndex(
                name: "IX_Module_PlanID",
                table: "Module",
                column: "PlanID");

            migrationBuilder.CreateIndex(
                name: "IX_ComposantModule_ModulesID",
                table: "ComposantModule",
                column: "ModulesID");

            migrationBuilder.CreateIndex(
                name: "IX_GammeModule_ModulesID",
                table: "GammeModule",
                column: "ModulesID");

            migrationBuilder.CreateIndex(
                name: "IX_ModeleModule_modulesID",
                table: "ModeleModule",
                column: "modulesID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleComposant_ComposantID",
                table: "ModuleComposant",
                column: "ComposantID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleGamme_GammeID",
                table: "ModuleGamme",
                column: "GammeID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleModele_ModeleID",
                table: "ModuleModele",
                column: "ModeleID");

            migrationBuilder.CreateIndex(
                name: "IX_ModulePlan_PlanID",
                table: "ModulePlan",
                column: "PlanID");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleSlot_SlotID",
                table: "ModuleSlot",
                column: "SlotID");

            migrationBuilder.CreateIndex(
                name: "IX_PlanProjet_ProjetsID",
                table: "PlanProjet",
                column: "ProjetsID");

            migrationBuilder.CreateIndex(
                name: "IX_ProjetPlan_PlanID",
                table: "ProjetPlan",
                column: "PlanID");

            migrationBuilder.AddForeignKey(
                name: "FK_Devis_Projet_PlanID",
                table: "Devis",
                column: "PlanID",
                principalTable: "Projet",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Module_Plan_PlanID",
                table: "Module",
                column: "PlanID",
                principalTable: "Plan",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Plan_Module_ModuleID",
                table: "Plan",
                column: "ModuleID",
                principalTable: "Module",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Plan_Slot_SlotID",
                table: "Plan",
                column: "SlotID",
                principalTable: "Slot",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devis_Projet_PlanID",
                table: "Devis");

            migrationBuilder.DropForeignKey(
                name: "FK_Module_Plan_PlanID",
                table: "Module");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_Module_ModuleID",
                table: "Plan");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_Slot_SlotID",
                table: "Plan");

            migrationBuilder.DropTable(
                name: "ComposantModule");

            migrationBuilder.DropTable(
                name: "GammeModule");

            migrationBuilder.DropTable(
                name: "ModeleModule");

            migrationBuilder.DropTable(
                name: "ModuleComposant");

            migrationBuilder.DropTable(
                name: "ModuleGamme");

            migrationBuilder.DropTable(
                name: "ModuleModele");

            migrationBuilder.DropTable(
                name: "ModulePlan");

            migrationBuilder.DropTable(
                name: "ModuleSlot");

            migrationBuilder.DropTable(
                name: "PlanProjet");

            migrationBuilder.DropTable(
                name: "ProjetPlan");

            migrationBuilder.DropIndex(
                name: "IX_Plan_ModuleID",
                table: "Plan");

            migrationBuilder.DropIndex(
                name: "IX_Plan_SlotID",
                table: "Plan");

            migrationBuilder.DropIndex(
                name: "IX_Module_PlanID",
                table: "Module");

            migrationBuilder.DropColumn(
                name: "ModuleID",
                table: "Plan");

            migrationBuilder.DropColumn(
                name: "SlotID",
                table: "Plan");

            migrationBuilder.DropColumn(
                name: "ProjetID",
                table: "Devis");

            migrationBuilder.RenameColumn(
                name: "SlotID",
                table: "Module",
                newName: "GammeID");

            migrationBuilder.RenameColumn(
                name: "LIBELLE_FAMILLE_COMPOSANT",
                table: "FamilleComposant",
                newName: "LibelleFamilleComposant");

            migrationBuilder.RenameColumn(
                name: "EmailCommercial",
                table: "Commercial",
                newName: "EmailCommerce");

            migrationBuilder.AlterColumn<int>(
                name: "PlanID",
                table: "Module",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PlanID",
                table: "Devis",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Module_GammeID",
                table: "Module",
                column: "GammeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Devis_Plan_PlanID",
                table: "Devis",
                column: "PlanID",
                principalTable: "Plan",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Module_Gamme_GammeID",
                table: "Module",
                column: "GammeID",
                principalTable: "Gamme",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Module_Modele_ID",
                table: "Module",
                column: "ID",
                principalTable: "Modele",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
