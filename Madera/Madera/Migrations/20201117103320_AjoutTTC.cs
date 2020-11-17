using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class AjoutTTC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "PrixTotal",
                table: "ModuleComposants",
                type: "decimal(10,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "PrixTtc",
                table: "ModuleComposants",
                type: "decimal(10,2)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrixTotal",
                table: "ModuleComposants");

            migrationBuilder.DropColumn(
                name: "PrixTtc",
                table: "ModuleComposants");
        }
    }
}
