using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example.Infrastructure
{
	public interface IDbConnectionFactory
	{
		Task<IDbConnection> CreateConnectionAsync(CancellationToken cancellationToken = default); 
	}

	public class ExampleDbContext(string connectionString) : IDbConnectionFactory
	{
		private readonly string _connectionString = connectionString;

		public async Task<IDbConnection> CreateConnectionAsync(CancellationToken cancellationToken = default)
		{
			var connection = new SqlConnection(_connectionString);
			await connection.OpenAsync(cancellationToken);
			return connection;
		}
	}
}
