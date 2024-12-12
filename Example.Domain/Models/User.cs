using Example.Domain.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example.Domain.Models
{
	public class User : BaseEntity
	{
		public string Name { get; set; }
		public string Email { get; set; }
		public Roles Role { get; set; }
	}

	public enum Roles{
		Guest,
		Waiter,
		Manager,
		Director,
		Admin
	};
}
