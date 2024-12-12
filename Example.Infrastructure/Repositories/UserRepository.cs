using Dapper;
using Example.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example.Infrastructure.Repositories
{
	public class UserRepository(ExampleDbContext _context)
	{
		public Task<User?> GetById(int id)
		{
			throw new NotImplementedException();
		} 

		public async Task<List<User>> GetAll()
		{
			using var dbConnection = await _context.CreateConnectionAsync();

			var result = await dbConnection.QueryAsync<User>("SELECT * FROM Users");

			return result.ToList();
		}
	}
}
