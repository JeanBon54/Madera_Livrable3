using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class correctionForeignKey2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Composant_FamilleComposant_ID",
                table: "Composant");

            migrationBuilder.DropForeignKey(
                name: "FK_Plan_Couverture_ID",
                table: "Plan");

            migrationBuilder.DropForeignKey(
                name: "FK_Projet_Client_ID",
                table: "Projet");

            migrationBuilder.DropForeignKey(
                name: "FK_Projet_Commercial_ID",
                table: "Projet");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddForeignKey(
                name: "FK_Composant_FamilleComposant_ID",
                table: "Composant",
                column: "ID",
                principalTable: "FamilleComposant",
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
        }
    }
}
