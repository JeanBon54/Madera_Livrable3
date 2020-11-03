using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class fixnullable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "PrixHtModule",
                table: "Module",
                type: "decimal(10, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10 2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Module",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "PrixHtModule",
                table: "Module",
                type: "decimal(10 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10, 2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Module",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
