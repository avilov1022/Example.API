using Example.Infrastructure;
using System.Data;

namespace Example.API
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			var configuration = builder.Configuration;

			builder.Services.AddControllers();
			builder.Services.AddEndpointsApiExplorer();

			builder.Services.AddSingleton<IDbConnectionFactory>( _ => new ExampleDbContext(configuration.GetConnectionString(nameof(ExampleDbContext))!));

			builder.Services.AddSingleton<IDbConnectionFactory>(_ =>
				new ExampleDbContext(builder.Configuration["ExampleDbContext"]!));

			builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
				builder =>
				{
					builder.WithOrigins("http://localhost");
				}
				));

			builder.Services.AddSwaggerGen();

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseCors((x) => x
								.AllowAnyOrigin()
								.AllowAnyMethod()
								.AllowAnyHeader());

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.Run();
		}
	}
}
