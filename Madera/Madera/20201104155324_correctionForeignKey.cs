using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class correctionForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LIBELLE_FAMILLE_COMPOSANT",
                table: "FamilleComposant");

            migrationBuilder.AddColumn<string>(
                name: "LibelleFamilleComposant",
                table: "FamilleComposant",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Slot_ModuleID",
                table: "Slot",
                column: "ModuleID");

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
                name: "IX_Module_GammeID",
                table: "Module",
                column: "GammeID");

            migrationBuilder.CreateIndex(
                name: "IX_Devis_PlanID",
                table: "Devis",
                column: "PlanID");

            migrationBuilder.AddForeignKey(
                name: "FK_Composant_FamilleComposant_ID",
                table: "Composant",
                column: "ID",
                principalTable: "FamilleComposant",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

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

            migrationBuilder.AddForeignKey(
                name: "FK_Plan_CoupePrincipale_CoupePrincipaleID",
                table: "Plan",
                column: "CoupePrincipaleID",
                principalTable: "CoupePrincipale",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Plan_Couverture_CouvertureID",
                table: "Plan",
                column: "CouvertureID",
                principalTable: "Couverture",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Plan_Couverture_ID",
                table: "Plan",
                column: "ID",
                principalTable: "Couverture",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Plan_Plancher_PlancherID",
                table: "Plan",
                column: "PlancherID",
                principalTable: "Plancher",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Projet_Client_ID",
                table: "Projet",
                column: "ID",
                principalTable: "Client",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Projet_Commercial_ID",
                table: "Projet",
                column: "ID",
                principalTable: "Commercial",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Slot_Module_ModuleID",
                table: "Slot",
                column: "ModuleID",
                principalTable: "Module",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Composant_FamilleComposant_ID",
                table: "Composant");

            migrationBuilder.DropForeignKey(
                name: "FK_Devis_Plan_PlanID",
                table: "Devis");

            migrationBuilder.DropForeignKey(
                name: "FK_Module_Gamme_GammeID",
                table: "Module");

            migrationBuilder.DropForeignKey(
                name: "FK_Module_Modele_ID",
                table: "Module");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_CoupePrincipale_CoupePrincipaleID",
                table: "Plan");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_Couverture_CouvertureID",
                table: "Plan");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_Couverture_ID",
                table: "Plan");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_Plancher_PlancherID",
                table: "Plan");

            migrationBuilder.DropForeignKey(
                name: "FK_Projet_Client_ID",
                table: "Projet");

            migrationBuilder.DropForeignKey(
                name: "FK_Projet_Commercial_ID",
                table: "Projet");

            migrationBuilder.DropForeignKey(
                name: "FK_Slot_Module_ModuleID",
                table: "Slot");

            migrationBuilder.DropIndex(
                name: "IX_Slot_ModuleID",
                table: "Slot");

            migrationBuilder.DropIndex(
                name: "IX_Plan_CoupePrincipaleID",
                table: "Plan");

            migrationBuilder.DropIndex(
                name: "IX_Plan_CouvertureID",
                table: "Plan");

            migrationBuilder.DropIndex(
                name: "IX_Plan_PlancherID",
                table: "Plan");

            migrationBuilder.DropIndex(
                name: "IX_Module_GammeID",
                table: "Module");

            migrationBuilder.DropIndex(
                name: "IX_Devis_PlanID",
                table: "Devis");

            migrationBuilder.DropColumn(
                name: "LibelleFamilleComposant",
                table: "FamilleComposant");

            migrationBuilder.AddColumn<string>(
                name: "LIBELLE_FAMILLE_COMPOSANT",
                table: "FamilleComposant",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
