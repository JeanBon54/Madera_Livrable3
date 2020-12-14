using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class champsDegueuDevis : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "idProjetPlan",
                table: "Plan",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "idProjetPlan",
                table: "Plan");
        }
    }
}
