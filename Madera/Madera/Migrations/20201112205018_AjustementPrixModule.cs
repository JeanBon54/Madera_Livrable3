using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class AjustementPrixModule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrixHtModule",
                table: "Module");

            migrationBuilder.AddColumn<decimal>(
                name: "PrixHt",
                table: "ModuleComposants",
                type: "decimal(10,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "quatite",
                table: "ModuleComposants",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrixHt",
                table: "ModuleComposants");

            migrationBuilder.DropColumn(
                name: "quatite",
                table: "ModuleComposants");

            migrationBuilder.AddColumn<decimal>(
                name: "PrixHtModule",
                table: "Module",
                type: "decimal(10,2)",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
