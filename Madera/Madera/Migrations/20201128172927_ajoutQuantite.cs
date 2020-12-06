using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class ajoutQuantite : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "quantite",
                table: "ModuleComposants",
                newName: "Quantite");

            migrationBuilder.AddColumn<int>(
                name: "quantite",
                table: "ModulePlans",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "quantite",
                table: "ModulePlans");

            migrationBuilder.RenameColumn(
                name: "Quantite",
                table: "ModuleComposants",
                newName: "quantite");
        }
    }
}
